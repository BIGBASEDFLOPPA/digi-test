import { computed } from 'vue'

export function useProductFilters(products, searchRef, sizesRef, brandsRef, priceRangeRef) {
    const filteredProducts = computed(() => {
        const min = Number(priceRangeRef.value[0]) || 0
        const max = Number(priceRangeRef.value[1]) || Infinity

        return products.value.filter(p => {
            if (searchRef.value && !p.title.toLowerCase().includes(searchRef.value.toLowerCase())) return false
            if (sizesRef.value.length && !p.sizes?.some(s => sizesRef.value.includes(s))) return false
            if (brandsRef.value.length && !brandsRef.value.includes(p.brand)) return false
            if (min && p.price < min) return false
            if (max && p.price > max) return false
            return true
        })
    })

    return { filteredProducts }
}
