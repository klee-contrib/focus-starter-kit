const Panel = FocusComponents.components.Panel;

export default React.createClass({
    displayName: 'MovieCaracteristics',
    
    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.caracteristics'>
                Ici les caracteristiques.
            </Panel>
        );
    }
});
