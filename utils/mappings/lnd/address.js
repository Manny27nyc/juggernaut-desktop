// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const mapAddress = address => {
  return {
    network: address.network,
    addr: address.addr
  };
};

export default mapAddress;
