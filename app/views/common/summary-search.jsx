// Components

const QuickSearch = FocusComponents.search.searchBar.component;

const SummarySearch = React.createClass({
    displayName: 'summary-search',
    render() {
        return (
            <QuickSearch />
        );
    }
});

module.exports = SummarySearch;
