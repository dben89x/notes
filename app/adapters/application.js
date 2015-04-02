// import DS from "ember-data";
//
// export default DS.LSAdapter.extend({
//   host: 'http://localhost:3000'
// });

import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: 'https://notes-app-api.herokuapp.com'
});
