const FS_CLIENT_ID = "2YKSC0BQ5GFTP0FH4ESR1ZUFQJMM135XJ5SFI3WZZOT1H2OK";
const FS_CLIENT_SECRET = "V4M5SUGP5ENHW5UCOMRPIUVZ4LTOWOEFRHFFUS0J3ENU1VMU";
const FS_API_VERSION = "20180101";

const FS_AXIOS_CONFIG = {
  baseURL: "https://api.foursquare.com/v2/",
  params: {
    client_id: FS_CLIENT_ID,
    client_secret: FS_CLIENT_SECRET,
    v: FS_API_VERSION
  }
};

export {
  FS_AXIOS_CONFIG
};
