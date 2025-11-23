import { ref, computed } from 'vue'

export function useProductFilters(products, searchRef) {
    const search = searchRef || ref('')
    const selectedSizes = ref([])
    const selectedBrands = ref([])
    const priceRange = ref([0, 0])

    const filteredProducts = computed(() => {
        const min = Number(priceRange.value[0]) || 0
        const max = Number(priceRange.value[1]) || 0

        return products.value.filter(p => {
            if (search.value && !p.title.toLowerCase().includes(search.value.toLowerCase())) return false
            if (selectedSizes.value.length && !p.sizes?.some(s => selectedSizes.value.includes(s))) return false
            if (selectedBrands.value.length && !selectedBrands.value.includes(p.brand)) return false
            if (min && p.price < min) return false
            if (max && p.price > max) return false
            return true
        })
    })

    return {
        search,
        selectedSizes,
        selectedBrands,
        priceRange,
        filteredProducts
    }
}
