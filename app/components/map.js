//<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>
let types = Focus.component.types;
//http://maps.google.com/maps?q=description+(name)+%4046.080271,6.465248
//`https://www.google.com/maps/embeded/v1/place?key=${apiKey}&q=${latitude},${longitude}`
module.exports = React.createClass({
    displayName: 'Map',
    getDefaultProps(){
        return {
            description: 'Map description',
            mapsUrl: 'https://www.google.com/maps/embed/v1/view',
            apiKey: 'AIzaSyBM3swaxxOnbTVRNvy6XNWyh6AOWFxZx0Y',
            style: {
                width: '300',
                height: '170',
                frameborder: '0',
                scrolling: 'no',
                marginheight: '0',
                marginwidth: '0'
            }
        };
    },
    getInitialState(){
        let {mapsUrl, latitude, longitude, description, apiKey} = this.props;
        return {
            mapSrc: `${mapsUrl}?key=${apiKey}&center=${latitude},${longitude}`//`http://maps.google.com/maps?q=${description}+%${latitude},${longitude}`
        };
    },
    propTypes:{
            latitude: types('string'),
            longitude: types('string')
    },
    render(){
        let {style} = this.props;
        let {mapSrc} = this.state;
        return (
            <iframe style={style} src={mapSrc}></iframe>
        );
    }
});
