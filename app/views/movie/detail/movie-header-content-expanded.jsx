// libraries
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//web components
import {mixin as formPreset} from 'focus-components/common/form';
import {component as Button} from 'focus-components/common/button/action';
import {component as Modal} from 'focus-components/application/popin';

//stores
import movieStore from '../../../stores/movie';

//custom components
import Poster from '../../../components/poster';
import Trailer from '../../../components/trailer';

export default React.createClass({
    displayName: 'MovieDetailHeaderExpanded',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    openTrailerPopin() {
        this.refs['modal-trailer'].toggleOpen();
    },

    /** @inheritDoc */
    renderContent() {
        const {title, poster, trailerHRef} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <Poster poster={poster} title={title} hasZoom={true} />
                <div data-demo='header-content-expanded__infos'>
                    <h2>{i18n.t('movie.keyConcept.name')}</h2>
                    <h3>{this.textFor('title')}</h3>
                    <h5>{this.textFor('movieType')}</h5>
                    <h6>{this.textFor('productionYear')}</h6>
                    <p>{this.textFor('shortSynopsis')}</p>
                </div>
                <div>
                    <Button label={i18n.t('button.watchTrailer')} type='button' handleOnClick={this.openTrailerPopin} />
                    <Modal ref="modal-trailer">
                        <Trailer url={trailerHRef} />
                    </Modal>
                </div>
            </div>
        );
    }
})
