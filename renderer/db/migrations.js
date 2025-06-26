/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const runMigrations = db => {
  db.version(1).stores({
    wallets: '++id',
    conversations: '++id,pubkey,walletId,&[pubkey+walletId],[alias+walletId]',
    messages: '++id,conversationId,createdAt,&[preimage+conversationId]'
  });

  // introduced concept of valid messages (match Juggernaut protocol)
  // all messages before this version should be considered valid
  db.version(2)
    .stores({})
    .upgrade(tx => {
      return tx
        .table('messages')
        .toCollection()
        .modify(message => {
          message.valid = true;
        });
    });
};

export default runMigrations;
