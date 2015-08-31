// Components

const QuickSearch = Focus.components.search.searchBar.component;

const SummarySearch = React.createClass({
    displayName: 'summary-search',
    render() {
        return (
            <QuickSearch />
        );
    }
});

module.exports = SummarySearch;
