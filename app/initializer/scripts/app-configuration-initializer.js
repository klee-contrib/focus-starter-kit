import dispatcher from 'focus-core/dispatcher';

import configServices from '../../services/config';
import ConfigStore from '../../stores/config';

import { once } from 'lodash';

const initialize = (appInitialisation) => {
    console.log('#########################[INIT APP CONFIG]#######################################');
    console.info('|--- USER');

    configServices.loadConfig().then(
    (data) => {
        console.info('   |--- Configuration loaded');

        ConfigStore.addConfigChangeListener(once(appInitialisation));
        dispatcher.handleServerAction({
          data: {
            config: data
        },
          type: 'update'
      });
    }
  );
};

export default {
    initialize: initialize
};
