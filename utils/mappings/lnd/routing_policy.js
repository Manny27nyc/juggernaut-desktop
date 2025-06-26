/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const mapRoutingPolicy = policy => {
  if (!policy) {
    return null;
  }

  return {
    timeLockDelta: policy.time_lock_delta,
    minHtlcMsat: policy.min_htlc,
    feeBaseMsat: policy.fee_base_msat,
    feeRateMilliMsat: policy.fee_rate_milli_msat,
    disabled: policy.disabled,
    maxHtlcMsat: policy.max_htlc_msat,
    lastUpdate: policy.last_update
  };
};

export default mapRoutingPolicy;
