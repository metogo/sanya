'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

// ─── Icons ────────────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const CarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
    <circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 1 4-1 8-4 11"/>
    <path d="M11.7 20c.5-3.5 2.3-6.5 5.3-8.5"/>
  </svg>
);
const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
type Service = {
  nameRu: string;
  nameZh: string;
  price: string;
  duration?: string;
  note?: string;
};

type Category = {
  id: string;
  icon: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: 'diagnosis',
    icon: '🩺',
    services: [
      { nameRu: 'Пульсовая диагностика', nameZh: '老中医诊脉', price: '100', duration: '15–30 мин' },
      { nameRu: 'Отвар из трав', nameZh: '中草药汤液', price: 'инд.', note: '辩证开方' },
      { nameRu: 'Фитогранулы', nameZh: '颗粒药', price: 'инд.', note: '辩证开方' },
      { nameRu: 'Пилюли из трав', nameZh: '中草药丸', price: 'инд.', note: '辩证开方' },
    ],
  },
  {
    id: 'acupuncture',
    icon: '✦',
    services: [
      { nameRu: 'Иглотерапия', nameZh: '针灸', price: '240', duration: '30–50 мин', note: '一侧' },
      { nameRu: 'Акупунктурный лифтинг лица', nameZh: '美容针灸', price: '280', duration: '20–30 мин' },
      { nameRu: 'Иглотерапия для снижения веса', nameZh: '减肥针灸', price: '240', duration: '30 мин' },
      { nameRu: 'Иглонож', nameZh: '小针刀', price: '500', note: '一穴' },
      { nameRu: 'Имплантация кетгута', nameZh: '埋线', price: '1500', note: '7–15 точек' },
      { nameRu: 'Электроиглоукалывание', nameZh: '电针仪', price: '180', duration: '20–30 мин', note: '一侧' },
      { nameRu: 'Травяное глинолечение', nameZh: '药敷', price: '180', duration: '20–30 мин', note: '一区' },
      { nameRu: 'Травяная инъекция', nameZh: '穴位注射', price: '180', note: '一区' },
      { nameRu: 'Банки с кровопусканием', nameZh: '放血疗法', price: '240', note: '一区' },
    ],
  },
  {
    id: 'moxibustion',
    icon: '🔥',
    services: [
      { nameRu: 'Инфракрасное прогревание', nameZh: '红外线治疗仪', price: '150', duration: '20–30 мин' },
      { nameRu: 'Прижигание полынными сигарами', nameZh: '古法悬灸', price: '240 / 380', duration: '30 / 60 мин' },
      { nameRu: 'Прижигание лечебной глиной', nameZh: '中草药泥灸', price: '240', duration: '10–20 мин' },
      { nameRu: 'Моксотерапия «Кость Дракона Фу Ян»', nameZh: '扶阳龙骨灸', price: '700', duration: '90–120 мин' },
      { nameRu: 'Фуянгуан', nameZh: '扶阳罐疗法', price: '220', duration: '30 мин' },
      { nameRu: 'Прогревание фуянгуан', nameZh: '扶阳垫热灸', price: '220', duration: '30 мин', note: '一侧' },
      { nameRu: 'Моксотерапия активных точек', nameZh: '穴位艾灸', price: '180', duration: '20 мин' },
      { nameRu: 'Моксотерапия частей тела', nameZh: '局部艾灸', price: '200', duration: '30 мин' },
      { nameRu: 'Фумигация китайскими травами', nameZh: '中药局部熏蒸', price: '220', duration: '20–30 мин' },
    ],
  },
  {
    id: 'massage',
    icon: '👐',
    services: [
      { nameRu: 'Профессиональное лечение', nameZh: '专家治疗调理', price: '480', duration: '45 мин' },
      { nameRu: 'Лечебный массаж', nameZh: '中医治疗推拿', price: '350', duration: '45 мин' },
      { nameRu: 'Вправление костей и коррекция осанки', nameZh: '正骨及形体矫正', price: '500' },
      { nameRu: 'Лимфодренаж', nameZh: '淋巴疏通调理', price: '320', duration: '30 мин' },
      { nameRu: 'Глубокая регуляция органов и меридиан', nameZh: '脏腑/带脉深度调理', price: '900', duration: '60–80 мин' },
      { nameRu: 'Традиционная терапия Цзун Цинь', nameZh: '师承宗筋疗法', price: '580', duration: '60 мин' },
      { nameRu: 'Огненный массаж', nameZh: '火疗', price: '340', duration: '45 мин' },
      { nameRu: 'Антицеллюлитный массаж', nameZh: '减肥套餐', price: '350', duration: '60 мин' },
      { nameRu: 'Массаж по меридианам тела', nameZh: '太极经络养生', price: '300 / 450', duration: '60 / 90 мин' },
    ],
  },
  {
    id: 'special',
    icon: '⚕',
    services: [
      { nameRu: 'Послеродовое восстановление', nameZh: '骨盆及产后修复', price: '620', duration: '90 мин' },
      { nameRu: 'Массаж простаты (для мужчин)', nameZh: '前列腺调理', price: '550', duration: '45 мин' },
      { nameRu: 'Восстановление яичников', nameZh: '卵巢保养', price: '550', duration: '45 мин' },
      { nameRu: 'Массаж груди', nameZh: '乳腺保养', price: '550', duration: '45 мин' },
      { nameRu: 'Вправление шейного отдела', nameZh: '颈椎牵引', price: '100', duration: '20 мин' },
      { nameRu: 'Коррекция осанки у детей', nameZh: '小儿肢体矫正', price: '300', note: '一次' },
      { nameRu: 'Терапия Ци', nameZh: '气渗疗法', price: '220', duration: '30 мин' },
      { nameRu: 'Нанесение трав + тепловые компрессы', nameZh: '中药导入+药包热敷', price: '520', duration: '60 мин' },
      { nameRu: 'Таргетная терапия ТКМ', nameZh: '中医定向透药疗法', price: '220', duration: '20 мин', note: '一区' },
      { nameRu: '«Вивафан»', nameZh: '威伐光治疗仪', price: '260', duration: '30 мин' },
      { nameRu: 'Ударно-волновая терапия', nameZh: '冲击波治疗仪', price: '200' },
      { nameRu: 'Восстановление волос травами', nameZh: '中草药养发护理', price: '200', duration: '45–60 мин' },
    ],
  },
  {
    id: 'foot',
    icon: '🦶',
    services: [
      { nameRu: 'Травяная ванна и массаж ступней', nameZh: '太极足部养生', price: '350', duration: '60 мин' },
      { nameRu: 'Китайский педикюр', nameZh: '中式足部修护', price: '280', duration: '30 мин' },
      { nameRu: 'Скобление «Гуаша»', nameZh: '刮痧', price: '150', duration: '15–20 мин' },
      { nameRu: 'Вакуум-терапия (банки)', nameZh: '火罐', price: '150', duration: '15–20 мин' },
    ],
  },
  {
    id: 'beauty',
    icon: '✨',
    services: [
      { nameRu: 'Комплексный уход за лицом', nameZh: '焕颜防衰护理', price: '450', duration: '60 мин' },
      { nameRu: 'Биоуход за лицом', nameZh: '保湿面部护理', price: '450', duration: '60 мин' },
      { nameRu: 'Арома-массаж', nameZh: '香薰推拿', price: '500', duration: '60 мин' },
      { nameRu: 'Скраб морской солью', nameZh: '海盐去角质', price: '500', duration: '60 мин' },
      { nameRu: 'Водорослевое обёртывание', nameZh: '海藻体膜', price: '500', duration: '60 мин' },
      { nameRu: 'Восстановление после загара', nameZh: '晒后修复', price: '500', duration: '60 мин' },
      { nameRu: 'Ушные арома-свечи', nameZh: '香薰耳烛', price: '500', duration: '60 мин' },
      { nameRu: 'Массаж головы с маслами', nameZh: '精油拨筋头疗', price: '300', duration: '30 мин' },
    ],
  },
  {
    id: 'spa',
    icon: '🌿',
    services: [
      { nameRu: 'Оздоровительный массаж', nameZh: '养生按摩', price: '550', duration: '2 часа' },
      { nameRu: 'Восстановление равновесия пяти стихий', nameZh: '五行平衡调理', price: '650', duration: '2.5 часа' },
      { nameRu: 'Арома-терапия и уход за стопами', nameZh: '香薰水疗', price: '750', duration: '2.5 часа' },
      { nameRu: 'Арома-терапия и уход за лицом', nameZh: '香薰护理', price: '980', duration: '2.5 часа' },
      { nameRu: 'СПА для мужчин «Царские Грёзы»', nameZh: '完美感觉', price: '1300', duration: '3 часа' },
      { nameRu: 'СПА для женщин «Услада Царицы»', nameZh: '奇妙感觉', price: '1300', duration: '3 часа' },
    ],
  },
];

// ─── ServiceCard ──────────────────────────────────────────────────────────────
function ServiceCard({ svc, locale, formatPrice }: { svc: Service; locale: string; formatPrice: (p: string) => string }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: 16,
      border: '1px solid var(--mist)',
      boxShadow: 'var(--shadow-xs)',
      padding: '14px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12,
    }}>
      {/* Left: names */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.4 }}>
          {locale === 'zh' ? svc.nameZh : svc.nameRu}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 3 }}>
          {locale === 'zh' ? svc.nameRu : svc.nameZh}
        </div>
        {(svc.duration || svc.note) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
            {svc.duration && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: 'var(--text-3)', background: 'var(--sand)', borderRadius: 6, padding: '2px 6px' }}>
                <ClockIcon />{svc.duration}
              </span>
            )}
            {svc.note && (
              <span style={{ fontSize: 11, color: 'var(--ocean)', background: 'var(--ocean-lt)', borderRadius: 6, padding: '2px 6px' }}>
                {svc.note}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Right: price */}
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        {svc.price === 'инд.' ? (
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>
            {formatPrice(svc.price)}
          </span>
        ) : (
          <>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--coral)', lineHeight: 1 }}>
              ¥{svc.price}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
              {locale === 'ru' ? 'юаней' : locale === 'zh' ? '元' : 'yuan'}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TcmPage() {
  const t = useTranslations('tcm');
  const tMenu = useTranslations('menu');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const active = categories.find((c) => c.id === activeCategory) ?? null;

  const allCount = categories.reduce((sum, c) => sum + c.services.length, 0);

  const getCategoryLabel = (id: string) => {
    if (id === 'all') return locale === 'zh' ? '全部' : locale === 'ru' ? 'Все' : 'All';
    return t(`categories.${id}` as any);
  };

  const formatPrice = (price: string) => {
    if (price === 'инд.') return locale === 'zh' ? '辩证开方' : locale === 'en' ? 'Custom' : 'Инд.';
    return price;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--sand)', paddingBottom: 80 }}>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3a2a 0%, #0d2e1e 50%, #0B3955 100%)',
        padding: '48px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: -20, left: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', borderRadius: 999, padding: '4px 12px', marginBottom: 16 }}>
            <span style={{ fontSize: 13 }}>🌿</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 500 }}>{t('subtitle')}</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 28,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.25,
            marginBottom: 20,
          }}>
            {t('title')}
          </h1>

          {/* Contact buttons */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href="https://t.me/+8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#0088cc', color: 'white',
                padding: '10px 18px', borderRadius: 12,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}
            >
              <TelegramIcon />
              Telegram
            </a>
            <a
              href="https://wa.me/8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#25D366', color: 'white',
                padding: '10px 18px', borderRadius: 12,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Category Tab Bar ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--mist)',
        boxShadow: 'var(--shadow-xs)',
      }}>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          <div style={{ display: 'flex', gap: 6, padding: '10px 16px', width: 'max-content' }}>
            {/* 全部 tab */}
            {[{ id: 'all', icon: '☰' }, ...categories].map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 999,
                    border: 'none', cursor: 'pointer',
                    fontSize: 13, fontWeight: isActive ? 600 : 500,
                    background: isActive ? 'var(--ocean)' : 'var(--sand)',
                    color: isActive ? 'white' : 'var(--text-2)',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: 14 }}>{cat.icon}</span>
                  {getCategoryLabel(cat.id)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Service List ── */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '20px 16px 0' }}>

        {activeCategory === 'all' ? (
          /* ── 全部模式：按分类分组，h3 标题 ── */
          <>
            {/* 总数 badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 22 }}>☰</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--text-1)' }}>
                {getCategoryLabel('all')}
              </h2>
              <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 500, color: 'var(--text-3)', background: 'var(--sand)', border: '1px solid var(--mist)', borderRadius: 999, padding: '2px 10px' }}>
                {allCount} {locale === 'ru' ? 'процедур' : locale === 'zh' ? '项' : 'items'}
              </span>
            </div>

            {categories.map((cat) => (
              <div key={cat.id} style={{ marginBottom: 32 }}>
                {/* h3 分类标题 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 18 }}>{cat.icon}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 16, fontWeight: 700,
                    color: 'var(--ocean)',
                    margin: 0,
                  }}>
                    {getCategoryLabel(cat.id)}
                  </h3>
                  <div style={{ flex: 1, height: 1, background: 'var(--mist)', marginLeft: 4 }} />
                  <span style={{ fontSize: 11, color: 'var(--text-3)' }}>
                    {cat.services.length}{locale === 'zh' ? '项' : ''}
                  </span>
                </div>

                {/* 该分类的服务卡片 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.services.map((svc, i) => (
                    <ServiceCard key={i} svc={svc} locale={locale} formatPrice={formatPrice} />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          /* ── 单分类模式 ── */
          <>
            {/* Category heading */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 24 }}>{active?.icon}</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--text-1)' }}>
                {active ? getCategoryLabel(active.id) : ''}
              </h2>
              <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 500, color: 'var(--text-3)', background: 'var(--sand)', border: '1px solid var(--mist)', borderRadius: 999, padding: '2px 10px' }}>
                {active?.services.length} {locale === 'ru' ? 'процедур' : locale === 'zh' ? '项' : 'items'}
              </span>
            </div>

            {/* Service cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {active?.services.map((svc, i) => (
                <ServiceCard key={i} svc={svc} locale={locale} formatPrice={formatPrice} />
              ))}
            </div>
          </>
        )}

        {/* ── Notes Box ── */}
        <div style={{
          background: 'white',
          borderRadius: 16,
          border: '1px solid var(--mist)',
          padding: '16px 18px',
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 16 }}>📋</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)' }}>{t('noteTitle')}</span>
          </div>
          {(['note1', 'note2', 'note3', 'note4'] as const).map((key, i) => (
            <div key={key} style={{ display: 'flex', gap: 10, marginBottom: i < 3 ? 8 : 0 }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--ocean-lt)', color: 'var(--ocean)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </span>
              <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{t(key)}</span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{
          background: 'linear-gradient(135deg, #1a3a2a, #0B3955)',
          borderRadius: 20,
          padding: '24px 20px',
          textAlign: 'center',
          marginBottom: 12,
        }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>🌿</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 6 }}>
            {t('bookCta')}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
            {t('address')}
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://t.me/+8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#0088cc', color: 'white',
                padding: '11px 20px', borderRadius: 12,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}
            >
              <TelegramIcon />
              Telegram
            </a>
            <a
              href="https://wa.me/8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#25D366', color: 'white',
                padding: '11px 20px', borderRadius: 12,
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="lg:hidden">
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
          background: 'white', borderTop: '1px solid var(--mist)',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 56 }}>
            <Link href="/" style={{ flex: 1, textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '6px 0', color: 'var(--text-3)' }}>
                <HomeIcon />
                <span style={{ fontSize: 10, fontWeight: 600 }}>{tMenu('home')}</span>
              </div>
            </Link>
            <Link href="/chauffeur" style={{ flex: 1, textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '6px 0', color: 'var(--text-3)' }}>
                <CarIcon />
                <span style={{ fontSize: 10, fontWeight: 600 }}>{tMenu('chauffeur')}</span>
              </div>
            </Link>
            <Link href="/tcm" style={{ flex: 1, textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '6px 0', color: 'var(--ocean)' }}>
                <div style={{ padding: 4, borderRadius: 12, background: 'var(--ocean-lt)' }}>
                  <LeafIcon />
                </div>
                <span style={{ fontSize: 10, fontWeight: 600 }}>{tMenu('tcm')}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
