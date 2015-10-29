const Panel = FocusComponents.components.Panel;

export default React.createClass({
    displayName: 'MovieSynopsis',

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.synopsis'>
                Ici le synopsis.
            </Panel>
        );
    }
});
