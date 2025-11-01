const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// File paths
const chineseFilePath = path.join(__dirname, '..', '三亚旅游景点 Top 榜单 (完整中文版).xlsx');
const russianFilePath = path.join(__dirname, '..', '三亚旅游景点 Top 榜单 (完整俄语版).xlsx');
const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'attractions.ts');

// Category mappings
const categoryMap = {
  '海滩': 'beach',
  '文化': 'culture',
  '自然': 'nature',
  '娱乐': 'entertainment',
  'пляж': 'beach',
  'культура': 'culture',
  'природа': 'nature',
  'развлечения': 'entertainment'
};

const categoryIcons = {
  'beach': '🏖️',
  'culture': '🏛️',
  'nature': '🌴',
  'entertainment': '🎢'
};

const categoryNames = {
  'beach': { en: 'Beach', ru: 'Пляж', zh: '海滩' },
  'culture': { en: 'Culture', ru: 'Культура', zh: '文化' },
  'nature': { en: 'Nature', ru: 'Природа', zh: '自然' },
  'entertainment': { en: 'Entertainment', ru: 'Развлечения', zh: '娱乐' }
};

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}

function normalizeCategory(cat) {
  if (!cat) return 'nature';
  const normalized = categoryMap[cat.toLowerCase().trim()] || categoryMap[cat.trim()];
  return normalized || 'nature';
}

function parseTags(tagsString) {
  if (!tagsString) return [];
  return tagsString.split(/[,，、]/).map(tag => tag.trim()).filter(tag => tag);
}

function mergeData(chineseData, russianData) {
  const attractions = [];
  
  // Create a map for easier lookup
  const russianMap = new Map();
  russianData.forEach((item, index) => {
    russianMap.set(index, item);
  });

  chineseData.forEach((chItem, index) => {
    const ruItem = russianMap.get(index) || {};
    
    const category = normalizeCategory(chItem['分类'] || ruItem['Категория'] || 'nature');
    const icon = categoryIcons[category];
    
    // Get Chinese data
    const nameZh = chItem['景点名称'] || '';
    const descriptionZh = chItem['景点描述'] || '';
    const locationZh = chItem['景点位置'] || '';
    const price = parseInt(chItem['门票价格(元)'] || 0);
    
    // Get Russian data
    const nameRu = ruItem['Название'] || '';
    const descriptionRu = ruItem['Описание'] || '';
    const locationRu = ruItem['Расположение'] || '';
    
    const attraction = {
      id: String(index + 1),
      name: nameZh,  // Use Chinese name as English fallback
      nameRu: nameRu,
      nameZh: nameZh,
      description: descriptionZh,  // Use Chinese description as English fallback
      descriptionRu: descriptionRu,
      descriptionZh: descriptionZh,
      image: chItem['图片链接'] || ruItem['Ссылка на изображение'] || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop',
      rating: parseFloat(chItem['评分'] || ruItem['Рейтинг'] || 4.5),
      reviewCount: parseInt(chItem['评论数'] || ruItem['Кол-во отзывов'] || 1000),
      location: locationZh,  // Use Chinese location as English fallback
      locationRu: locationRu,
      locationZh: locationZh,
      category: category,
      categoryRu: `${icon} ${categoryNames[category].ru}`,
      categoryEn: `${icon} ${categoryNames[category].en}`,
      categoryZh: `${icon} ${categoryNames[category].zh}`,
      price: price,
      isFree: price === 0,
      tags: parseTags(chItem['标签'] || ruItem['Теги'] || '')
    };
    
    attractions.push(attraction);
  });

  return attractions;
}

function generateTypeScriptFile(attractions) {
  let content = `import { Attraction } from '@/types/attraction';\n\n`;
  content += `export const attractions: Attraction[] = [\n`;
  
  attractions.forEach((attraction, index) => {
    content += `  {\n`;
    content += `    id: '${attraction.id}',\n`;
    content += `    name: '${attraction.name.replace(/'/g, "\\'")}',\n`;
    content += `    nameRu: '${attraction.nameRu.replace(/'/g, "\\'")}',\n`;
    content += `    nameZh: '${attraction.nameZh.replace(/'/g, "\\'")}',\n`;
    content += `    description: '${attraction.description.replace(/'/g, "\\'")}',\n`;
    content += `    descriptionRu: '${attraction.descriptionRu.replace(/'/g, "\\'")}',\n`;
    content += `    descriptionZh: '${attraction.descriptionZh.replace(/'/g, "\\'")}',\n`;
    content += `    image: '${attraction.image}',\n`;
    content += `    rating: ${attraction.rating},\n`;
    content += `    reviewCount: ${attraction.reviewCount},\n`;
    content += `    location: '${attraction.location.replace(/'/g, "\\'")}',\n`;
    content += `    locationRu: '${attraction.locationRu.replace(/'/g, "\\'")}',\n`;
    content += `    locationZh: '${attraction.locationZh.replace(/'/g, "\\'")}',\n`;
    content += `    category: '${attraction.category}',\n`;
    content += `    categoryRu: '${attraction.categoryRu}',\n`;
    content += `    categoryEn: '${attraction.categoryEn}',\n`;
    content += `    categoryZh: '${attraction.categoryZh}',\n`;
    content += `    price: ${attraction.price},\n`;
    content += `    isFree: ${attraction.isFree},\n`;
    content += `    tags: [${attraction.tags.map(tag => `'${tag.replace(/'/g, "\\'")}'`).join(', ')}]\n`;
    content += `  }${index < attractions.length - 1 ? ',' : ''}\n`;
  });
  
  content += `];\n`;
  
  return content;
}

// Main execution
try {
  console.log('Reading Excel files...');
  const chineseData = readExcelFile(chineseFilePath);
  const russianData = readExcelFile(russianFilePath);
  
  console.log(`Found ${chineseData.length} Chinese attractions`);
  console.log(`Found ${russianData.length} Russian attractions`);
  
  console.log('Merging data...');
  const attractions = mergeData(chineseData, russianData);
  
  console.log('Generating TypeScript file...');
  const tsContent = generateTypeScriptFile(attractions);
  
  console.log('Writing to file...');
  fs.writeFileSync(outputFilePath, tsContent, 'utf8');
  
  console.log(`✅ Successfully generated ${outputFilePath}`);
  console.log(`   Total attractions: ${attractions.length}`);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}