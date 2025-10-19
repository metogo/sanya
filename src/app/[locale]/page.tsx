'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import AttractionCard from '@/components/AttractionCard';
import {attractions} from '@/data/attractions';
import {FilterCategory, FilterPrice, FilterRating} from '@/types/attraction';

export default function Home() {
    const t = useTranslations();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
    const [selectedRating, setSelectedRating] = useState<FilterRating>('all');
    const [selectedPrice, setSelectedPrice] = useState<FilterPrice>('all');

    // Filter attractions based on search and filters
    const filteredAttractions = useMemo(() => {
        return attractions.filter((attraction) => {
            // Search filter
            const matchesSearch = searchQuery === '' ||
                attraction.nameRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.descriptionRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.locationRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            // Category filter
            const matchesCategory = selectedCategory === 'all' || attraction.category === selectedCategory;

            // Rating filter
            let matchesRating = true;
            if (selectedRating === '4+') matchesRating = attraction.rating >= 4;
            else if (selectedRating === '4.5+') matchesRating = attraction.rating >= 4.5;
            else if (selectedRating === '5') matchesRating = attraction.rating === 5;

            // Price filter
            let matchesPrice = true;
            if (selectedPrice === 'free') matchesPrice = attraction.isFree;
            else if (selectedPrice === 'budget') matchesPrice = !attraction.isFree && attraction.price < 100;
            else if (selectedPrice === 'premium') matchesPrice = !attraction.isFree && attraction.price >= 100;

            return matchesSearch && matchesCategory && matchesRating && matchesPrice;
        });
    }, [searchQuery, selectedCategory, selectedRating, selectedPrice]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onSearch={setSearchQuery}/>

            {/* Filter Bar */}
            <FilterBar
                selectedCategory={selectedCategory}
                selectedRating={selectedRating}
                selectedPrice={selectedPrice}
                onCategoryChange={setSelectedCategory}
                onRatingChange={setSelectedRating}
                onPriceChange={setSelectedPrice}
            />

            {/* Main Content */}
            <main
                className="max-w-[1400px] mx-auto py-12 md:py-16"
                style={{paddingLeft: '10px', paddingRight: '10px'}}>
                {/* Results Count */}
                <div className="mb-10" style={{marginTop: 10, marginBottom: 10}}>
                    <div
                        style={{padding: 10}}
                        className="flex items-center justify-between flex-wrap gap-4 bg-gradient-to-r from-blue-50 via-red-50 to-blue-50 p-6 md:p-8 rounded-2xl border-4 border-gray-300 shadow-lg">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                                style={{fontFamily: "'Playfair Display', serif"}}>
                                {t('main.popularPlaces')}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                {t('main.foundAttractions')} <span
                                className="font-bold text-[#DC143C] text-lg">{filteredAttractions.length}</span>
                            </p>
                        </div>

                        {/* Quick Stats */}
                        {filteredAttractions.length > 0 && (
                            <div className="flex gap-4 text-sm">
                                <div className="bg-white px-5 py-3 rounded-xl shadow-md border-2 border-gray-300">
                                    <span className="text-gray-600 font-semibold">{t('main.averageRating')}</span>
                                    <span className="ml-2 font-bold text-[#DC143C] text-lg">
                    {(filteredAttractions.reduce((acc, a) => acc + a.rating, 0) / filteredAttractions.length).toFixed(1)} ⭐
                  </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Attractions Grid */}
                {filteredAttractions.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                        {filteredAttractions.map((attraction) => (
                            <div key={attraction.id} className="p-2">
                                <AttractionCard attraction={attraction}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl shadow-lg border border-gray-100">
                        <div className="text-8xl mb-6 animate-bounce">🔍</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('main.noResults')}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                            {t('main.noResultsDescription')}
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedRating('all');
                                setSelectedPrice('all');
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            {t('main.resetFilters')}
                        </button>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="mt-16 bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] text-white py-12">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('footer.title')}
                        </h3>
                        <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                            {t('footer.subtitle')}
                        </p>
                        <div className="border-t border-white/20 pt-6 mt-6">
                            <p className="text-sm text-white/80">
                                {t('footer.copyright')}
                            </p>
                            <p className="text-xs text-white/60 mt-2">
                                {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

