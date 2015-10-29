const Panel = FocusComponents.components.Panel;

export default React.createClass({
    displayName: 'MovieActors',
    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.actors'>
                Ici les acteurs.
            </Panel>
        );
    }
});
