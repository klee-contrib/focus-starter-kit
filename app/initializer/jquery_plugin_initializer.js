module.exports = {
  initialize: function(options, context) {
    defineCustomDateParser();
    momentTimeZoneInitializer();
  }
};

//Define the custom date parser.
function defineCustomDateParser() {
  /*Fix in order to have js date. Override the prototype. */
  $.fn.datepickerCustomParser = function(option) {
    var result = $.fn.datepicker.apply(this, arguments);
    if (result.toString() === 'Invalid Date') {
      result = undefined;
    } else {
      result = moment.tz([result.getFullYear(), result.getMonth(), result.getDate()], "Etc/UTC").toDate().toISOString();
      //result = result.toISOString(); //.format('yyyy-MM-ddThh:mm:ss');
    }
    return result;
  };
}

//Initialize moment properties.
function momentTimeZoneInitializer() {
  //customization of the moment timezones.
  moment.tz.add({
    "zones": {
      "etc/utc": [
        "0 - utc"
      ],
      "europe/paris": [
        "0:9:21 - lmt 1891_2_15_0_1 0:9:21",
        "0:9:21 - pmt 1911_2_11_0_1 0:9:21",
        "0 france we%st 1940_5_14_23 1",
        "1 c-eur ce%st 1944_7_25 2",
        "0 france we%st 1945_8_16_3 2",
        "1 france ce%st 1977 1",
        "1 eu ce%st"
      ]
    },
    "rules": {
      "france": [
        "1916 1916 5 14 7 23 2 1 s",
        "1916 1919 9 1 0 23 2 0",
        "1917 1917 2 24 7 23 2 1 s",
        "1918 1918 2 9 7 23 2 1 s",
        "1919 1919 2 1 7 23 2 1 s",
        "1920 1920 1 14 7 23 2 1 s",
        "1920 1920 9 23 7 23 2 0",
        "1921 1921 2 14 7 23 2 1 s",
        "1921 1921 9 25 7 23 2 0",
        "1922 1922 2 25 7 23 2 1 s",
        "1922 1938 9 1 6 23 2 0",
        "1923 1923 4 26 7 23 2 1 s",
        "1924 1924 2 29 7 23 2 1 s",
        "1925 1925 3 4 7 23 2 1 s",
        "1926 1926 3 17 7 23 2 1 s",
        "1927 1927 3 9 7 23 2 1 s",
        "1928 1928 3 14 7 23 2 1 s",
        "1929 1929 3 20 7 23 2 1 s",
        "1930 1930 3 12 7 23 2 1 s",
        "1931 1931 3 18 7 23 2 1 s",
        "1932 1932 3 2 7 23 2 1 s",
        "1933 1933 2 25 7 23 2 1 s",
        "1934 1934 3 7 7 23 2 1 s",
        "1935 1935 2 30 7 23 2 1 s",
        "1936 1936 3 18 7 23 2 1 s",
        "1937 1937 3 3 7 23 2 1 s",
        "1938 1938 2 26 7 23 2 1 s",
        "1939 1939 3 15 7 23 2 1 s",
        "1939 1939 10 18 7 23 2 0",
        "1940 1940 1 25 7 2 0 1 s",
        "1941 1941 4 5 7 0 0 2 m",
        "1941 1941 9 6 7 0 0 1 s",
        "1942 1942 2 9 7 0 0 2 m",
        "1942 1942 10 2 7 3 0 1 s",
        "1943 1943 2 29 7 2 0 2 m",
        "1943 1943 9 4 7 3 0 1 s",
        "1944 1944 3 3 7 2 0 2 m",
        "1944 1944 9 8 7 1 0 1 s",
        "1945 1945 3 2 7 2 0 2 m",
        "1945 1945 8 16 7 3 0 0",
        "1976 1976 2 28 7 1 0 1 s",
        "1976 1976 8 26 7 1 0 0"
      ],
      "c-eur": [
        "1916 1916 3 30 7 23 0 1 s",
        "1916 1916 9 1 7 1 0 0",
        "1917 1918 3 15 1 2 2 1 s",
        "1917 1918 8 15 1 2 2 0",
        "1940 1940 3 1 7 2 2 1 s",
        "1942 1942 10 2 7 2 2 0",
        "1943 1943 2 29 7 2 2 1 s",
        "1943 1943 9 4 7 2 2 0",
        "1944 1945 3 1 1 2 2 1 s",
        "1944 1944 9 2 7 2 2 0",
        "1945 1945 8 16 7 2 2 0",
        "1977 1980 3 1 0 2 2 1 s",
        "1977 1977 8 0 8 2 2 0",
        "1978 1978 9 1 7 2 2 0",
        "1979 1995 8 0 8 2 2 0",
        "1981 9999 2 0 8 2 2 1 s",
        "1996 9999 9 0 8 2 2 0"
      ],
      "eu": [
        "1977 1980 3 1 0 1 1 1 s",
        "1977 1977 8 0 8 1 1 0",
        "1978 1978 9 1 7 1 1 0",
        "1979 1995 8 0 8 1 1 0",
        "1981 9999 2 0 8 1 1 1 s",
        "1996 9999 9 0 8 1 1 0"
      ]
    },
    "links": {}
  });

}