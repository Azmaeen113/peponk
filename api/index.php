<?php
$apiUrl = 'https://api.mainnet-beta.solana.com';
$tokenAddress = 'Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump';
$decimals = 6;
$burnAddress = '11111111111111111111111111111111'; // Burn address on Solana
$excludedTokenAccounts = [
    '11111111111111111111111111111111',
    'Frjj7f8epH7uQiPwMqMdNawgEieoELhVdy6x49M7bDrZ'
];

function getApiResponse($url, $postData) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $output = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);
    return json_decode($output, true);
}

function getTotalSupply($tokenAddress, $decimals) {
    global $apiUrl;
    $postData = [
        "jsonrpc" => "2.0",
        "id" => 1,
        "method" => "getTokenSupply",
        "params" => [$tokenAddress]
    ];
    $response = getApiResponse($apiUrl, $postData);
    if (isset($response['result']['value']['amount'])) {
        return $response['result']['value']['amount'] / pow(10, $decimals); // Convert from smallest unit
    }
    return 'NA';
}

function getTokenAccountBalance($tokenAccount, $decimals) {
    global $apiUrl;
    $postData = [
        "jsonrpc" => "2.0",
        "id" => 1,
        "method" => "getTokenAccountBalance",
        "params" => [$tokenAccount]
    ];
    $response = getApiResponse($apiUrl, $postData);
    if (isset($response['result']['value']['amount'])) {
        return $response['result']['value']['amount'] / pow(10, $decimals); // Convert from smallest unit
    }
    return 0;
}

function getCirculatingSupply($tokenAddress, $excludedTokenAccounts, $burnAddress, $decimals) {
    $totalSupply = getTotalSupply($tokenAddress, $decimals);
    $excludedSupply = 0;

    foreach ($excludedTokenAccounts as $account) {
        $excludedSupply += getTokenAccountBalance($account, $decimals);
    }

    // Include the burn address balance
    $excludedSupply += getTokenAccountBalance($burnAddress, $decimals);

    $circulatingSupply = $totalSupply - $excludedSupply;
    return $circulatingSupply;
}

if ($_GET['q'] == 'totalcoins') {
    // Subtract burn address balance from total supply
    $totalSupply = getTotalSupply($tokenAddress, $decimals);
    $burnBalance = getTokenAccountBalance($burnAddress, $decimals);
    echo $totalSupply - $burnBalance;
} elseif ($_GET['q'] == 'circulating') {
    echo getCirculatingSupply($tokenAddress, $excludedTokenAccounts, $burnAddress, $decimals);
} elseif ($_GET['q'] == 'maxcoins') {
    echo getTotalSupply($tokenAddress, $decimals); 
} else {
    echo 'Invalid query';
}
?>
