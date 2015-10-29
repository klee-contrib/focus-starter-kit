const Panel = FocusComponents.components.Panel;

export default React.createClass({
    displayName: 'MoviePosters',

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.posters'>
                Ici les posters.
            </Panel>
        );
    }
});
