const {Panel} = FocusComponents.components;

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
