import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';

export default function cartridgeConfiguration() {
    return {
        summary: {
            component: SummaryPageSearch,
            props: { }
        },
        cartridge: {
            component: CartridgePageSearch,
            props: { }
        },
        actions: {
            primary: [],
            secondary: []
        }
    };
}
