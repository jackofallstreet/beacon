(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51216,e=>{"use strict";var t=e.i(63663);let a={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"};e.s(["f",0,a])},86385,e=>{"use strict";var t=e.i(51216);e.s(["f",0,{caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,parseEvmChainId(e){return"string"==typeof e?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace:(e,t)=>e?.filter(e=>e.chainNamespace===t)||[],getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,a){if(!a)return;let r=e.find(e=>e.caipNetworkId===a);if(r)return r.name;let[o]=a.split(":");return t.f.CHAIN_NAME_MAP?.[o]||void 0}}])},25708,e=>{"use strict";e.s(["f",0,function(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}])},41439,56548,e=>{"use strict";e.s(["f",()=>m],41439),e.s(["f",()=>w],56548);var t=e.i(99762),a=e.i(97064),r=e.i(78684),o=e.i(32810),i=e.i(81586),s=e.i(98216),n=e.i(76977),c=e.i(35654),l=e.i(47639);let d={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},u=r.f.getBlockchainApiUrl(),p=(0,t.s)({clientId:null,api:new i.f({baseUrl:u,clientId:null}),supportedChains:{http:[],ws:[]}}),w={state:p,async get(e){let{st:t,sv:a}=w.getSdkProperties(),r=c.f.state.projectId,o={...e.params||{},st:t,sv:a,projectId:r};return p.api.get({...e,params:o})},getSdkProperties(){let{sdkType:e,sdkVersion:t}=c.f.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{p.supportedChains.http.length||await w.getSupportedNetworks()}catch(e){return!1}return p.supportedChains.http.includes(e)},async getSupportedNetworks(){try{let e=await w.get({path:"v1/supported-chains"});return p.supportedChains=e,e}catch{return p.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await w.isNetworkSupported(t))return{avatar:"",name:""};let a=s.f.getIdentityFromCacheForAddress(e);if(a)return a;let o=await w.get({path:`/v1/identity/${e}`,params:{sender:n.f.state.activeCaipAddress?r.f.getPlainAddress(n.f.state.activeCaipAddress):void 0}});return s.f.updateIdentityCache({address:e,identity:o,timestamp:Date.now()}),o},fetchTransactions:async({account:e,cursor:t,onramp:a,signal:r,cache:o,chainId:i})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:a,chainId:i},signal:r,cache:o}):{data:[],next:void 0},fetchSwapQuote:async({amount:e,userAddress:t,from:a,to:r,gasPrice:o})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:a,to:r,gasPrice:o}}):{quotes:[]},fetchSwapTokens:async({chainId:e})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]},fetchTokenPrice:async({addresses:e})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:c.f.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]},fetchSwapAllowance:async({tokenAddress:e,userAddress:t})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"},async fetchGasPrice({chainId:e}){let{st:t,sv:a}=w.getSdkProperties();if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Gas Price");return w.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:a}})},async generateSwapCalldata({amount:e,from:t,to:r,userAddress:o,disableEstimate:i}){if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return p.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:a.W.CONVERT_SLIPPAGE_TOLERANCE},projectId:c.f.state.projectId,from:t,to:r,userAddress:o,disableEstimate:i}})},async generateApproveCalldata({from:e,to:t,userAddress:a}){let{st:r,sv:o}=w.getSdkProperties();if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return w.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:a,from:e,to:t,st:r,sv:o}})},async getBalance(e,t,a){let{st:r,sv:o}=w.getSdkProperties();if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))return l.f.showError("Token Balance Unavailable"),{balances:[]};let i=`${t}:${e}`,c=s.f.getBalanceCacheForCaipAddress(i);if(c)return c;let d=await w.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:a,st:r,sv:o}});return s.f.updateBalanceCache({caipAddress:i,balance:d,timestamp:Date.now()}),d},lookupEnsName:async e=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]},reverseLookupEnsName:async({address:e})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/reverse/${e}`,params:{sender:m.state.address,apiVersion:"2"}}):[],getEnsNameSuggestions:async e=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]},registerEnsName:async({coinType:e,address:t,message:a,signature:r})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:a,signature:r},headers:{"Content-Type":"application/json"}}):{success:!1},generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:a,purchaseAmount:r,paymentAmount:o})=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?(await p.api.post({path:"/v1/generators/onrampurl",params:{projectId:c.f.state.projectId},body:{destinationWallets:e,defaultNetwork:a,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url:"",async getOnrampOptions(){if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await w.get({path:"/v1/onramp/options"})}catch(e){return d}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:a,network:r}){try{if(!await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId))return null;return await p.api.post({path:"/v1/onramp/quote",params:{projectId:c.f.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:a,network:r}})}catch(e){return{coinbaseFee:{amount:a,currency:t.id},networkFee:{amount:a,currency:t.id},paymentSubtotal:{amount:a,currency:t.id},paymentTotal:{amount:a,currency:t.id},purchaseAmount:{amount:a,currency:t.id},quoteId:"mocked-quote-id"}}},getSmartSessions:async e=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/sessions/${e}`}):[],revokeSmartSession:async(e,t,a)=>await w.isNetworkSupported(n.f.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:c.f.state.projectId},body:{pci:t,signature:a}}):{success:!1},setClientId(e){p.clientId=e,p.api=new i.f({baseUrl:u,clientId:e})}},g=(0,t.s)({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),m=(0,o.O)({state:g,replaceState(e){e&&Object.assign(g,(0,t.C)(e))},subscribe:e=>n.f.subscribeChainProp("accountState",t=>{if(t)return e(t)}),subscribeKey(e,t,a){let r;return n.f.subscribeChainProp("accountState",a=>{if(a){let o=a[e];r!==o&&(r=o,t(o))}},a)},setStatus(e,t){n.f.setAccountProp("status",e,t)},getCaipAddress:e=>n.f.getAccountProp("caipAddress",e),setCaipAddress(e,t){let a=e?r.f.getPlainAddress(e):void 0;t===n.f.state.activeChain&&(n.f.state.activeCaipAddress=e),n.f.setAccountProp("caipAddress",e,t),n.f.setAccountProp("address",a,t)},setBalance(e,t,a){n.f.setAccountProp("balance",e,a),n.f.setAccountProp("balanceSymbol",t,a)},setProfileName(e,t){n.f.setAccountProp("profileName",e,t)},setProfileImage(e,t){n.f.setAccountProp("profileImage",e,t)},setUser(e,t){n.f.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){n.f.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){n.f.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){n.f.setAccountProp("currentTab",e,n.f.state.activeChain)},setTokenBalance(e,t){e&&n.f.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){n.f.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){n.f.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,a){let r=n.f.getAccountProp("addressLabels",a)||new Map;r.set(e,t),n.f.setAccountProp("addressLabels",r,a)},removeAddressLabel(e,t){let a=n.f.getAccountProp("addressLabels",t)||new Map;a.delete(e),n.f.setAccountProp("addressLabels",a,t)},setConnectedWalletInfo(e,t){n.f.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){n.f.setAccountProp("preferredAccountTypes",{...g.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){g.preferredAccountTypes=e},setSocialProvider(e,t){e&&n.f.setAccountProp("socialProvider",e,t)},setSocialWindow(e,a){n.f.setAccountProp("socialWindow",e?(0,t.C)(e):void 0,a)},setFarcasterUrl(e,t){n.f.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){g.balanceLoading=!0;let t=n.f.state.activeCaipNetwork?.caipNetworkId,o=n.f.state.activeCaipNetwork?.chainNamespace,i=n.f.state.activeCaipAddress,s=i?r.f.getPlainAddress(i):void 0;if(g.lastRetry&&!r.f.isAllowedRetry(g.lastRetry,30*a.W.ONE_SEC_MS))return g.balanceLoading=!1,[];try{if(s&&t&&o){let e=(await w.getBalance(s,t)).balances.filter(e=>"0"!==e.quantity.decimals);return m.setTokenBalance(e,o),g.lastRetry=void 0,g.balanceLoading=!1,e}}catch(t){g.lastRetry=Date.now(),e?.(t),l.f.showError("Token Balance Unavailable")}finally{g.balanceLoading=!1}return[]},resetAccount(e){n.f.resetAccount(e)}})},20717,e=>{"use strict";e.s(["f",()=>f]);var t=e.i(99762),a=e.i(57865),r=e.i(99579),o=e.i(78684),i=e.i(81586),s=e.i(91643),n=e.i(98216),c=e.i(56973),l=e.i(76977),d=e.i(78969),u=e.i(19005),p=e.i(35654);let w=o.f.getApiUrl(),g=new i.f({baseUrl:w,clientId:null}),m=(0,t.s)({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),f={state:m,subscribeKey:(e,t)=>(0,a.T)(m,e,t),_getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:a}=p.f.state;return{projectId:e,st:t||"appkit",sv:a||"html-wagmi-4.2.2"}},_filterOutExtensions:e=>p.f.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e,async _fetchWalletImage(e){let t=`${g.baseUrl}/getWalletImage/${e}`,a=await g.getBlob({path:t,params:f._getSdkProperties()});c.f.setWalletImage(e,URL.createObjectURL(a))},async _fetchNetworkImage(e){let t=`${g.baseUrl}/public/getAssetImage/${e}`,a=await g.getBlob({path:t,params:f._getSdkProperties()});c.f.setNetworkImage(e,URL.createObjectURL(a))},async _fetchConnectorImage(e){let t=`${g.baseUrl}/public/getAssetImage/${e}`,a=await g.getBlob({path:t,params:f._getSdkProperties()});c.f.setConnectorImage(e,URL.createObjectURL(a))},async _fetchCurrencyImage(e){let t=`${g.baseUrl}/public/getCurrencyImage/${e}`,a=await g.getBlob({path:t,params:f._getSdkProperties()});c.f.setCurrencyImage(e,URL.createObjectURL(a))},async _fetchTokenImage(e){let t=`${g.baseUrl}/public/getTokenImage/${e}`,a=await g.getBlob({path:t,params:f._getSdkProperties()});c.f.setTokenImage(e,URL.createObjectURL(a))},_filterWalletsByPlatform:e=>o.f.isMobile()?e?.filter(e=>!!e.mobile_link||e.id===s.L.COINBASE.id||"solana"===l.f.state.activeChain&&(e.id===s.L.SOLFLARE.id||e.id===s.L.PHANTOM.id)):e,fetchProjectConfig:async()=>(await g.get({path:"/appkit/v1/config",params:f._getSdkProperties()})).features,async fetchAllowedOrigins(){try{let{allowedOrigins:e}=await g.get({path:"/projects/v1/origins",params:f._getSdkProperties()});return e}catch(e){return[]}},async fetchNetworkImages(){let e=l.f.getAllRequestedCaipNetworks(),t=e?.map(({assets:e})=>e?.imageId).filter(Boolean).filter(e=>!r.f.getNetworkImageById(e));t&&await Promise.allSettled(t.map(e=>f._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=d.f.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>f._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>f._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>f._fetchTokenImage(e)))},async fetchWallets(e){let t=e.exclude??[];f._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(s.L).map(e=>e.id));let a=await g.get({path:"/getWallets",params:{...f._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")}});return{data:f._filterWalletsByPlatform(a?.data)||[],count:a?.count}},async fetchFeaturedWallets(){let{featuredWalletIds:e}=p.f.state;if(e?.length){let t={...f._getSdkProperties(),page:1,entries:e?.length??4,include:e},{data:a}=await f.fetchWallets(t),r=[...a].sort((t,a)=>e.indexOf(t.id)-e.indexOf(a.id)),o=r.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(o.map(e=>f._fetchWalletImage(e))),m.featured=r,m.allFeatured=r}},async fetchRecommendedWallets(){try{m.isFetchingRecommendedWallets=!0;let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:a}=p.f.state,r=[...t??[],...a??[]].filter(Boolean),o=l.f.getRequestedCaipNetworkIds().join(","),{data:i,count:s}=await f.fetchWallets({page:1,entries:4,include:e,exclude:r,chains:o}),c=n.f.getRecentWallets(),d=i.map(e=>e.image_id).filter(Boolean),u=c.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...d,...u].map(e=>f._fetchWalletImage(e))),m.recommended=i,m.allRecommended=i,m.count=s??0}catch{}finally{m.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){let{includeWalletIds:t,excludeWalletIds:a,featuredWalletIds:r}=p.f.state,i=l.f.getRequestedCaipNetworkIds().join(","),s=[...m.recommended.map(({id:e})=>e),...a??[],...r??[]].filter(Boolean),{data:n,count:c}=await f.fetchWallets({page:e,entries:40,include:t,exclude:s,chains:i}),d=n.slice(0,20).map(e=>e.image_id).filter(Boolean);await Promise.allSettled(d.map(e=>f._fetchWalletImage(e))),m.wallets=o.f.uniqueBy([...m.wallets,...f._filterOutExtensions(n)],"id").filter(e=>e.chains?.some(e=>i.includes(e))),m.count=c>m.count?c:m.count,m.page=e},async initializeExcludedWallets({ids:e}){let t={page:1,entries:e.length,include:e},{data:a}=await f.fetchWallets(t);a&&a.forEach(e=>{m.excludedWallets.push({rdns:e.rdns,name:e.name})})},async searchWallet({search:e,badge:t}){let{includeWalletIds:a,excludeWalletIds:r}=p.f.state,i=l.f.getRequestedCaipNetworkIds().join(",");m.search=[];let s={page:1,entries:100,search:e?.trim(),badge_type:t,include:a,exclude:r,chains:i},{data:n}=await f.fetchWallets(s);u.f.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});let c=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...c.map(e=>f._fetchWalletImage(e)),o.f.wait(300)]),m.search=f._filterOutExtensions(n)},initPromise(e,t){let a=m.promises[e];return a||(m.promises[e]=t())},prefetch:({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:a=!0,fetchNetworkImages:r=!0}={})=>Promise.allSettled([e&&f.initPromise("connectorImages",f.fetchConnectorImages),t&&f.initPromise("featuredWallets",f.fetchFeaturedWallets),a&&f.initPromise("recommendedWallets",f.fetchRecommendedWallets),r&&f.initPromise("networkImages",f.fetchNetworkImages)].filter(Boolean)),prefetchAnalyticsConfig(){p.f.state.features?.analytics&&f.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{let{isAnalyticsEnabled:e}=await g.get({path:"/getAnalyticsConfig",params:f._getSdkProperties()});p.f.setFeatures({analytics:e})}catch(e){p.f.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!e?.length){m.featured=m.allFeatured,m.recommended=m.allRecommended;return}let t=l.f.getRequestedCaipNetworkIds().join(",");m.featured=m.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),m.recommended=m.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),m.filteredWallets=m.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))},clearFilterByNamespaces(){m.filteredWallets=[]},setFilterByNamespace(e){if(!e){m.featured=m.allFeatured,m.recommended=m.allRecommended;return}let t=l.f.getRequestedCaipNetworkIds().join(",");m.featured=m.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),m.recommended=m.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),m.filteredWallets=m.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))}}},76977,74054,27459,e=>{"use strict";let t;e.s(["f",()=>K],76977),e.s(["f",()=>A],74054),e.s(["f",()=>j],27459);var a=e.i(99762),r=e.i(57865),o=e.i(51216),i=e.i(86385),s=e.i(97064),n=e.i(78684),c=e.i(98216),l=e.i(32810),d=e.i(41439),u=e.i(78969),p=e.i(19005),w=e.i(14919),g=e.i(4584),m=e.i(22146),f=e.i(56548),h=e.i(35654),b=e.i(47639);let v=(0,a.s)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),C=(0,l.O)({state:v,subscribe:e=>(0,a.i)(v,()=>e(v)),setLastNetworkInView(e){v.lastNetworkInView=e},async fetchTransactions(e,t){if(!e)throw Error("Transactions can't be fetched without an accountAddress");v.loading=!0;try{let a=await f.f.fetchTransactions({account:e,cursor:v.next,onramp:t,cache:"coinbase"===t?"no-cache":void 0,chainId:K.state.activeCaipNetwork?.caipNetworkId}),r=C.filterSpamTransactions(a.data),o=C.filterByConnectedChain(r),i=[...v.transactions,...o];v.loading=!1,"coinbase"===t?v.coinbaseTransactions=C.groupTransactionsByYearAndMonth(v.coinbaseTransactions,a.data):(v.transactions=i,v.transactionsByYear=C.groupTransactionsByYearAndMonth(v.transactionsByYear,o)),v.empty=0===i.length,v.next=a.next?a.next:void 0}catch(a){let t=K.state.activeChain;p.f.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:h.f.state.projectId,cursor:v.next,isSmartAccount:d.f.state.preferredAccountTypes?.[t]===m.f.ACCOUNT_TYPES.SMART_ACCOUNT}}),b.f.showError("Failed to fetch transactions"),v.loading=!1,v.empty=!0,v.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let a=new Date(t.metadata.minedAt).getFullYear(),r=new Date(t.metadata.minedAt).getMonth(),o=e[a]??{},i=(o[r]??[]).filter(e=>e.id!==t.id);e[a]={...o,[r]:[...i,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),filterByConnectedChain(e){let t=K.state.activeCaipNetwork?.caipNetworkId;return e.filter(e=>e.metadata.chain===t)},clearCursor(){v.next=void 0},resetTransactions(){v.transactions=[],v.transactionsByYear={},v.lastNetworkInView=void 0,v.loading=!1,v.empty=!1,v.next=void 0}},"API_ERROR"),N=(0,a.s)({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"}),A=(0,l.O)({state:N,subscribeKey:(e,t)=>(0,r.T)(N,e,t),_getClient:()=>N._client,setClient(e){N._client=(0,a.C)(e)},async connectWalletConnect(){if(n.f.isTelegram()||n.f.isSafari()&&n.f.isIos()){if(t){await t,t=void 0;return}if(!n.f.isPairingExpired(N?.wcPairingExpiry)){let e=N.wcUri;N.wcUri=e;return}t=A._getClient()?.connectWalletConnect?.().catch(()=>void 0),A.state.status="connecting",await t,t=void 0,N.wcPairingExpiry=void 0,A.state.status="connected"}else await A._getClient()?.connectWalletConnect?.()},async connectExternal(e,t,a=!0){await A._getClient()?.connectExternal?.(e),a&&K.setActiveNamespace(t)},async reconnectExternal(e){await A._getClient()?.reconnectExternal?.(e);let t=e.chain||K.state.activeChain;t&&u.f.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){w.f.setLoading(!0,K.state.activeChain);let a=u.f.getAuthConnector();a&&(d.f.setPreferredAccountType(e,t),await a.provider.setPreferredAccount(e),c.f.setPreferredAccountTypes(d.f.state.preferredAccountTypes??{[t]:e}),await A.reconnectExternal(a),w.f.setLoading(!1,K.state.activeChain),p.f.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:K.state.activeCaipNetwork?.caipNetworkId||""}}))},signMessage:async e=>A._getClient()?.signMessage(e),parseUnits:(e,t)=>A._getClient()?.parseUnits(e,t),formatUnits:(e,t)=>A._getClient()?.formatUnits(e,t),sendTransaction:async e=>A._getClient()?.sendTransaction(e),getCapabilities:async e=>A._getClient()?.getCapabilities(e),grantPermissions:async e=>A._getClient()?.grantPermissions(e),walletGetAssets:async e=>A._getClient()?.walletGetAssets(e)??{},estimateGas:async e=>A._getClient()?.estimateGas(e),writeContract:async e=>A._getClient()?.writeContract(e),getEnsAddress:async e=>A._getClient()?.getEnsAddress(e),getEnsAvatar:async e=>A._getClient()?.getEnsAvatar(e),checkInstalled:e=>A._getClient()?.checkInstalled?.(e)||!1,resetWcConnection(){N.wcUri=void 0,N.wcPairingExpiry=void 0,N.wcLinking=void 0,N.recentWallet=void 0,N.status="disconnected",C.resetTransactions(),c.f.deleteWalletConnectDeepLink()},resetUri(){N.wcUri=void 0,N.wcPairingExpiry=void 0,t=void 0},finalizeWcConnection(){let{wcLinking:e,recentWallet:t}=A.state;e&&c.f.setWalletConnectDeepLink(e),t&&c.f.setAppKitRecent(t),p.f.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:g.f.state.data?.wallet?.name||"Unknown"}})},setWcBasic(e){N.wcBasic=e},setUri(e){N.wcUri=e,N.wcPairingExpiry=n.f.getPairingExpiry()},setWcLinking(e){N.wcLinking=e},setWcError(e){N.wcError=e,N.buffering=!1},setRecentWallet(e){N.recentWallet=e},setBuffering(e){N.buffering=e},setStatus(e){N.status=e},async disconnect(e){try{await A._getClient()?.disconnect(e)}catch(e){throw new l.v("Failed to disconnect","INTERNAL_SDK_ERROR",e)}},setConnections(e,t){N.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:a}){if(u.f.state.activeConnectorIds[a]===e.connectorId){let e=K.state.activeCaipNetwork;if(e){let r=`${a}:${e.id}:${t}`;d.f.setCaipAddress(r,a)}else console.warn(`No current network found for namespace "${a}"`)}else{let t=u.f.getConnector(e.connectorId);t?A.connectExternal(t,a):console.warn(`No connector found for namespace "${a}"`)}}});var y=e.i(28303),E="[big.js] ",k=E+"Invalid ",I=k+"decimal places",S=k+"rounding mode",T=E+"Division by zero",_={},x=void 0,O=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function P(e,t,a,r){var o=e.c;if(a===x&&(a=e.constructor.RM),0!==a&&1!==a&&2!==a&&3!==a)throw Error(S);if(t<1)r=3===a&&(r||!!o[0])||0===t&&(1===a&&o[0]>=5||2===a&&(o[0]>5||5===o[0]&&(r||o[1]!==x))),o.length=1,r?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(r=1===a&&o[t]>=5||2===a&&(o[t]>5||5===o[t]&&(r||o[t+1]!==x||1&o[t-1]))||3===a&&(r||!!o[0]),o.length=t,r){for(;++o[--t]>9;)if(o[t]=0,0===t){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function U(e,t,a){var r=e.e,o=e.c.join(""),i=o.length;if(t)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(r<0?"e":"e+")+r;else if(r<0){for(;++r;)o="0"+o;o="0."+o}else if(r>0)if(++r>i)for(r-=i;r--;)o+="0";else r<i&&(o=o.slice(0,r)+"."+o.slice(r));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&a?"-"+o:o}_.abs=function(){var e=new this.constructor(this);return e.s=1,e},_.cmp=function(e){var t,a=this.c,r=(e=new this.constructor(e)).c,o=this.s,i=e.s,s=this.e,n=e.e;if(!a[0]||!r[0])return a[0]?o:r[0]?-i:0;if(o!=i)return o;if(t=o<0,s!=n)return s>n^t?1:-1;for(i=(s=a.length)<(n=r.length)?s:n,o=-1;++o<i;)if(a[o]!=r[o])return a[o]>r[o]^t?1:-1;return s==n?0:s>n^t?1:-1},_.div=function(e){var t=this.constructor,a=this.c,r=(e=new t(e)).c,o=this.s==e.s?1:-1,i=t.DP;if(i!==~~i||i<0||i>1e6)throw Error(I);if(!r[0])throw Error(T);if(!a[0])return e.s=o,e.c=[e.e=0],e;var s,n,c,l,d,u=r.slice(),p=s=r.length,w=a.length,g=a.slice(0,s),m=g.length,f=e,h=f.c=[],b=0,v=i+(f.e=this.e-e.e)+1;for(f.s=o,o=v<0?0:v,u.unshift(0);m++<s;)g.push(0);do{for(c=0;c<10;c++){if(s!=(m=g.length))l=s>m?1:-1;else for(d=-1,l=0;++d<s;)if(r[d]!=g[d]){l=r[d]>g[d]?1:-1;break}if(l<0){for(n=m==s?r:u;m;){if(g[--m]<n[m]){for(d=m;d&&!g[--d];)g[d]=9;--g[d],g[m]+=10}g[m]-=n[m]}for(;!g[0];)g.shift()}else break}h[b++]=l?c:++c,g[0]&&l?g[m]=a[p]||0:g=[a[p]]}while((p++<w||g[0]!==x)&&o--)return!h[0]&&1!=b&&(h.shift(),f.e--,v--),b>v&&P(f,v,t.RM,g[0]!==x),f},_.eq=function(e){return 0===this.cmp(e)},_.gt=function(e){return this.cmp(e)>0},_.gte=function(e){return this.cmp(e)>-1},_.lt=function(e){return 0>this.cmp(e)},_.lte=function(e){return 1>this.cmp(e)},_.minus=_.sub=function(e){var t,a,r,o,i=this.constructor,s=this.s,n=(e=new i(e)).s;if(s!=n)return e.s=-n,this.plus(e);var c=this.c.slice(),l=this.e,d=e.c,u=e.e;if(!c[0]||!d[0])return d[0]?e.s=-n:c[0]?e=new i(this):e.s=1,e;if(s=l-u){for((o=s<0)?(s=-s,r=c):(u=l,r=d),r.reverse(),n=s;n--;)r.push(0);r.reverse()}else for(a=((o=c.length<d.length)?c:d).length,s=n=0;n<a;n++)if(c[n]!=d[n]){o=c[n]<d[n];break}if(o&&(r=c,c=d,d=r,e.s=-e.s),(n=(a=d.length)-(t=c.length))>0)for(;n--;)c[t++]=0;for(n=t;a>s;){if(c[--a]<d[a]){for(t=a;t&&!c[--t];)c[t]=9;--c[t],c[a]+=10}c[a]-=d[a]}for(;0===c[--n];)c.pop();for(;0===c[0];)c.shift(),--u;return c[0]||(e.s=1,c=[u=0]),e.c=c,e.e=u,e},_.mod=function(e){var t,a=this,r=a.constructor,o=a.s,i=(e=new r(e)).s;if(!e.c[0])throw Error(T);return(a.s=e.s=1,t=1==e.cmp(a),a.s=o,e.s=i,t)?new r(a):(o=r.DP,i=r.RM,r.DP=r.RM=0,a=a.div(e),r.DP=o,r.RM=i,this.minus(a.times(e)))},_.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},_.plus=_.add=function(e){var t,a,r,o=this.constructor;if(e=new o(e),this.s!=e.s)return e.s=-e.s,this.minus(e);var i=this.e,s=this.c,n=e.e,c=e.c;if(!s[0]||!c[0])return c[0]||(s[0]?e=new o(this):e.s=this.s),e;if(s=s.slice(),t=i-n){for(t>0?(n=i,r=c):(t=-t,r=s),r.reverse();t--;)r.push(0);r.reverse()}for(s.length-c.length<0&&(r=c,c=s,s=r),t=c.length,a=0;t;s[t]%=10)a=(s[--t]=s[t]+c[t]+a)/10|0;for(a&&(s.unshift(a),++n),t=s.length;0===s[--t];)s.pop();return e.c=s,e.e=n,e},_.pow=function(e){var t=this,a=new t.constructor("1"),r=a,o=e<0;if(e!==~~e||e<-1e6||e>1e6)throw Error(k+"exponent");for(o&&(e=-e);1&e&&(r=r.times(t)),e>>=1;)t=t.times(t);return o?a.div(r):r},_.prec=function(e,t){if(e!==~~e||e<1||e>1e6)throw Error(k+"precision");return P(new this.constructor(this),e,t)},_.round=function(e,t){if(e===x)e=0;else if(e!==~~e||e<-1e6||e>1e6)throw Error(I);return P(new this.constructor(this),e+this.e+1,t)},_.sqrt=function(){var e,t,a,r=this.constructor,o=this.s,i=this.e,s=new r("0.5");if(!this.c[0])return new r(this);if(o<0)throw Error(E+"No square root");0===(o=Math.sqrt(+U(this,!0,!0)))||1/0===o?((t=this.c.join("")).length+i&1||(t+="0"),i=((i+1)/2|0)-(i<0||1&i),e=new r((1/0==(o=Math.sqrt(t))?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+i)):e=new r(o+""),i=e.e+(r.DP+=4);do a=e,e=s.times(a.plus(this.div(a)));while(a.c.slice(0,i).join("")!==e.c.slice(0,i).join(""))return P(e,(r.DP-=4)+e.e+1,r.RM)},_.times=_.mul=function(e){var t,a=this.constructor,r=this.c,o=(e=new a(e)).c,i=r.length,s=o.length,n=this.e,c=e.e;if(e.s=this.s==e.s?1:-1,!r[0]||!o[0])return e.c=[e.e=0],e;for(e.e=n+c,i<s&&(t=r,r=o,o=t,c=i,i=s,s=c),t=Array(c=i+s);c--;)t[c]=0;for(n=s;n--;){for(s=0,c=i+n;c>n;)s=t[c]+o[n]*r[c-n-1]+s,t[c--]=s%10,s=s/10|0;t[c]=s}for(s?++e.e:t.shift(),n=t.length;!t[--n];)t.pop();return e.c=t,e},_.toExponential=function(e,t){var a=this,r=a.c[0];if(e!==x){if(e!==~~e||e<0||e>1e6)throw Error(I);for(a=P(new a.constructor(a),++e,t);a.c.length<e;)a.c.push(0)}return U(a,!0,!!r)},_.toFixed=function(e,t){var a=this,r=a.c[0];if(e!==x){if(e!==~~e||e<0||e>1e6)throw Error(I);for(a=P(new a.constructor(a),e+a.e+1,t),e=e+a.e+1;a.c.length<e;)a.c.push(0)}return U(a,!1,!!r)},_[Symbol.for("nodejs.util.inspect.custom")]=_.toJSON=_.toString=function(){var e=this.constructor;return U(this,this.e<=e.NE||this.e>=e.PE,!!this.c[0])},_.toNumber=function(){var e=+U(this,!0,!0);if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(E+"Imprecise conversion");return e},_.toPrecision=function(e,t){var a=this,r=a.constructor,o=a.c[0];if(e!==x){if(e!==~~e||e<1||e>1e6)throw Error(k+"precision");for(a=P(new r(a),e,t);a.c.length<e;)a.c.push(0)}return U(a,e<=a.e||a.e<=r.NE||a.e>=r.PE,!!o)},_.valueOf=function(){var e=this.constructor;if(!0===e.strict)throw Error(E+"valueOf disallowed");return U(this,this.e<=e.NE||this.e>=e.PE,!0)};var R=function e(){function t(a){if(!(this instanceof t))return a===x?e():new t(a);if(a instanceof t)this.s=a.s,this.e=a.e,this.c=a.c.slice();else{if("string"!=typeof a){if(!0===t.strict&&"bigint"!=typeof a)throw TypeError(k+"value");a=0===a&&1/a<0?"-0":String(a)}!function(e,t){var a,r,o;if(!O.test(t))throw Error(k+"number");for(e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(a=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(a<0&&(a=r),a+=+t.slice(r+1),t=t.substring(0,r)):a<0&&(a=t.length),o=t.length,r=0;r<o&&"0"==t.charAt(r);)++r;if(r==o)e.c=[e.e=0];else{for(;o>0&&"0"==t.charAt(--o););for(e.e=a-r-1,e.c=[],a=0;r<=o;)e.c[a++]=+t.charAt(r++)}}(this,a)}this.constructor=t}return t.prototype=_,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.strict=!1,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}();let D={bigNumber:e=>new R(e?e:0),multiply(e,t){if(void 0===e||void 0===t)return new R(0);let a=new R(e),r=new R(t);return a.times(r)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}),parseLocalStringToNumber:e=>void 0===e?0:parseFloat(e.replace(/,/gu,""))},B=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],L=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var M=e.i(57701);let W={createBalance(e,t){let a={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:a.name,symbol:a.symbol,chainId:t,address:"native"===e.address?void 0:this.convertAddressToCAIP10Address(e.address,t),value:a.value,price:a.price,quantity:{decimals:a.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:a.decimals})},iconUrl:a.iconUrl}},convertHexToBalance:({hex:e,decimals:t})=>(0,M.f)(BigInt(e),t),convertAddressToCAIP10Address:(e,t)=>`${t}:${e}`,createCAIP2ChainId:(e,t)=>`${t}:${parseInt(e,16)}`,getChainIdHexFromCAIP2ChainId(e){let t=e.split(":");if(t.length<2||!t[1])return"0x0";let a=parseInt(t[1],10);return isNaN(a)?"0x0":`0x${a.toString(16)}`},isWalletGetAssetsResponse(e){return"object"==typeof e&&null!==e&&Object.values(e).every(e=>Array.isArray(e)&&e.every(e=>this.isValidAsset(e)))},isValidAsset:e=>"object"==typeof e&&null!==e&&"string"==typeof e.address&&"string"==typeof e.balance&&("ERC20"===e.type||"NATIVE"===e.type)&&"object"==typeof e.metadata&&null!==e.metadata&&"string"==typeof e.metadata.name&&"string"==typeof e.metadata.symbol&&"number"==typeof e.metadata.decimals&&"number"==typeof e.metadata.price&&"string"==typeof e.metadata.iconUrl},F={async getMyTokensWithBalance(e){let t=d.f.state.address,a=K.state.activeCaipNetwork;if(!t||!a)return[];if("eip155"===a.chainNamespace){let e=await this.getEIP155Balances(t,a);if(e)return this.filterLowQualityTokens(e)}let r=await f.f.getBalance(t,a.caipNetworkId,e);return this.filterLowQualityTokens(r.balances)},async getEIP155Balances(e,t){try{let a=W.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),r=await A.getCapabilities(e);if(!r?.[a]?.assetDiscovery?.supported)return null;let o=await A.walletGetAssets({account:e,chainFilter:[a]});if(!W.isWalletGetAssetsResponse(o))return null;return(o[a]||[]).map(e=>W.createBalance(e,t.caipNetworkId))}catch(e){return null}},filterLowQualityTokens:e=>e.filter(e=>"0"!==e.quantity.decimals),mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:K.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},H=(0,a.s)({tokenBalances:[],loading:!1}),j=(0,l.O)({state:H,subscribe:e=>(0,a.i)(H,()=>e(H)),subscribeKey:(e,t)=>(0,r.T)(H,e,t),setToken(e){e&&(H.token=(0,a.C)(e))},setTokenAmount(e){H.sendTokenAmount=e},setReceiverAddress(e){H.receiverAddress=e},setReceiverProfileImageUrl(e){H.receiverProfileImageUrl=e},setReceiverProfileName(e){H.receiverProfileName=e},setNetworkBalanceInUsd(e){H.networkBalanceInUSD=e},setLoading(e){H.loading=e},async sendToken(){try{switch(j.setLoading(!0),K.state.activeCaipNetwork?.chainNamespace){case"eip155":await j.sendEvmToken();return;case"solana":await j.sendSolanaToken();return;default:throw Error("Unsupported chain")}}finally{j.setLoading(!1)}},async sendEvmToken(){let e=K.state.activeChain,t=d.f.state.preferredAccountTypes?.[e];if(!j.state.sendTokenAmount||!j.state.receiverAddress)throw Error("An amount and receiver address are required");if(!j.state.token)throw Error("A token is required");j.state.token?.address?(p.f.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===m.f.ACCOUNT_TYPES.SMART_ACCOUNT,token:j.state.token.address,amount:j.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await j.sendERC20Token({receiverAddress:j.state.receiverAddress,tokenAddress:j.state.token.address,sendTokenAmount:j.state.sendTokenAmount,decimals:j.state.token.quantity.decimals})):(p.f.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===m.f.ACCOUNT_TYPES.SMART_ACCOUNT,token:j.state.token.symbol||"",amount:j.state.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),await j.sendNativeToken({receiverAddress:j.state.receiverAddress,sendTokenAmount:j.state.sendTokenAmount,decimals:j.state.token.quantity.decimals}))},async fetchTokenBalance(e){H.loading=!0;let t=K.state.activeCaipNetwork?.caipNetworkId,a=K.state.activeCaipNetwork?.chainNamespace,r=K.state.activeCaipAddress,o=r?n.f.getPlainAddress(r):void 0;if(H.lastRetry&&!n.f.isAllowedRetry(H.lastRetry,30*s.W.ONE_SEC_MS))return H.loading=!1,[];try{if(o&&t&&a){let e=await F.getMyTokensWithBalance();return H.tokenBalances=e,H.lastRetry=void 0,e}}catch(t){H.lastRetry=Date.now(),e?.(t),b.f.showError("Token Balance Unavailable")}finally{H.loading=!1}return[]},fetchNetworkBalance(){if(0===H.tokenBalances.length)return;let e=F.mapBalancesToSwapTokens(H.tokenBalances);if(!e)return;let t=e.find(e=>e.address===K.getActiveNetworkTokenAddress());t&&(H.networkBalanceInUSD=t?D.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){g.f.pushTransactionStack({});let t=e.receiverAddress,a=d.f.state.address,r=A.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await A.sendTransaction({chainNamespace:"eip155",to:t,address:a,data:"0x",value:r??BigInt(0)}),p.f.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:d.f.state.preferredAccountTypes?.eip155===m.f.ACCOUNT_TYPES.SMART_ACCOUNT,token:j.state.token?.symbol||"",amount:e.sendTokenAmount,network:K.state.activeCaipNetwork?.caipNetworkId||""}}),A._getClient()?.updateBalance("eip155"),j.resetSend()},async sendERC20Token(e){g.f.pushTransactionStack({onSuccess(){g.f.replace("Account")}});let t=A.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(d.f.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){let a,r=n.f.getPlainAddress(e.tokenAddress);await A.writeContract({fromAddress:d.f.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:(a=r,o.f.USDT_CONTRACT_ADDRESSES.includes(a)?L:B),chainNamespace:"eip155"}),j.resetSend()}},async sendSolanaToken(){if(!j.state.sendTokenAmount||!j.state.receiverAddress)throw Error("An amount and receiver address are required");g.f.pushTransactionStack({onSuccess(){g.f.replace("Account")}}),await A.sendTransaction({chainNamespace:"solana",to:j.state.receiverAddress,value:j.state.sendTokenAmount}),A._getClient()?.updateBalance("solana"),j.resetSend()},resetSend(){H.token=void 0,H.sendTokenAmount=void 0,H.receiverAddress=void 0,H.receiverProfileImageUrl=void 0,H.receiverProfileName=void 0,H.loading=!1,H.tokenBalances=[]}}),$={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},z={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},V=(0,a.s)({chains:(0,r.I)(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),K=(0,l.O)({state:V,subscribe:e=>(0,a.i)(V,()=>{e(V)}),subscribeKey:(e,t)=>(0,r.T)(V,e,t),subscribeChainProp(e,t,r){let o;return(0,a.i)(V.chains,()=>{let a=r||V.activeChain;if(a){let r=V.chains.get(a)?.[e];o!==r&&(o=r,t(r))}})},initialize(e,t,r){let{chainId:o,namespace:i}=c.f.getActiveNetworkProps(),s=t?.find(e=>e.id.toString()===o?.toString()),n=e.find(e=>e?.namespace===i)||e?.[0],l=e.map(e=>e.namespace).filter(e=>void 0!==e),d=new Set(h.f.state.enableEmbedded?[...l]:[...t?.map(e=>e.chainNamespace)??[]]);e?.length!==0&&n||(V.noAdapters=!0),!V.noAdapters&&(V.activeChain=n?.namespace,V.activeCaipNetwork=s,K.setChainNetworkData(n?.namespace,{caipNetwork:s}),V.activeChain&&y.f.set({activeChain:n?.namespace})),d.forEach(e=>{let o=t?.filter(t=>t.chainNamespace===e);K.state.chains.set(e,{namespace:e,networkState:(0,a.s)({...z,caipNetwork:o?.[0]}),accountState:(0,a.s)($),caipNetworks:o??[],...r}),K.setRequestedCaipNetworks(o??[],e)})},removeAdapter(e){if(V.activeChain===e){let t=Array.from(V.chains.entries()).find(([t])=>t!==e);if(t){let e=t[1]?.caipNetworks?.[0];e&&K.setActiveCaipNetwork(e)}}V.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:a},r){V.chains.set(e.namespace,{namespace:e.namespace,networkState:{...z,caipNetwork:r[0]},accountState:$,caipNetworks:r,connectionControllerClient:a,networkControllerClient:t}),K.setRequestedCaipNetworks(r?.filter(t=>t.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){let t=V.chains.get(e.chainNamespace);if(t){let a=[...t.caipNetworks||[]];t.caipNetworks?.find(t=>t.id===e.id)||a.push(e),V.chains.set(e.chainNamespace,{...t,caipNetworks:a}),K.setRequestedCaipNetworks(a,e.chainNamespace),u.f.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){let a=V.chains.get(e);if(a){let r=V.activeCaipNetwork?.id===t,o=[...a.caipNetworks?.filter(e=>e.id!==t)||[]];r&&a?.caipNetworks?.[0]&&K.setActiveCaipNetwork(a.caipNetworks[0]),V.chains.set(e,{...a,caipNetworks:o}),K.setRequestedCaipNetworks(o||[],e),0===o.length&&u.f.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){let a=V.chains.get(e);a&&(a.networkState={...a.networkState||z,...t},V.chains.set(e,a))},setChainAccountData(e,t,a=!0){if(!e)throw Error("Chain is required to update chain account data");let r=V.chains.get(e);if(r){let a={...r.accountState||$,...t};V.chains.set(e,{...r,accountState:a}),(1===V.chains.size||V.activeChain===e)&&(t.caipAddress&&(V.activeCaipAddress=t.caipAddress),d.f.replaceState(a))}},setChainNetworkData(e,t){if(!e)return;let a=V.chains.get(e);if(a){let r={...a.networkState||z,...t};V.chains.set(e,{...a,networkState:r})}},setAccountProp(e,t,a,r=!0){K.setChainAccountData(a,{[e]:t},r),"status"===e&&"disconnected"===t&&a&&u.f.removeConnectorId(a)},setActiveNamespace(e){V.activeChain=e;let t=e?V.chains.get(e):void 0,a=t?.networkState?.caipNetwork;a?.id&&e&&(V.activeCaipAddress=t?.accountState?.caipAddress,V.activeCaipNetwork=a,K.setChainNetworkData(e,{caipNetwork:a}),c.f.setActiveCaipNetworkId(a?.caipNetworkId),y.f.set({activeChain:e,selectedNetworkId:a?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;V.activeChain!==e.chainNamespace&&K.setIsSwitchingNamespace(!0);let t=V.chains.get(e.chainNamespace);V.activeChain=e.chainNamespace,V.activeCaipNetwork=e,K.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),t?.accountState?.address?V.activeCaipAddress=`${e.chainNamespace}:${e.id}:${t?.accountState?.address}`:V.activeCaipAddress=void 0,K.setAccountProp("caipAddress",V.activeCaipAddress,e.chainNamespace),t&&d.f.replaceState(t.accountState),j.resetSend(),y.f.set({activeChain:V.activeChain,selectedNetworkId:V.activeCaipNetwork?.caipNetworkId}),c.f.setActiveCaipNetworkId(e.caipNetworkId),K.checkIfSupportedNetwork(e.chainNamespace)||!h.f.state.enableNetworkSwitch||h.f.state.allowUnsupportedChain||A.state.wcBasic||K.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;let t=V.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},async switchActiveNamespace(e){if(!e)return;let t=e!==K.state.activeChain,a=K.getNetworkData(e)?.caipNetwork,r=K.getCaipNetworkByNamespace(e,a?.id);t&&r&&await K.switchActiveNetwork(r)},async switchActiveNetwork(e){let t=K.state.chains.get(K.state.activeChain),a=!t?.caipNetworks?.some(e=>e.id===V.activeCaipNetwork?.id),r=K.getNetworkControllerClient(e.chainNamespace);if(r){try{await r.switchCaipNetwork(e),a&&w.f.close()}catch(e){g.f.goBack()}p.f.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){let t=e||V.activeChain,a=V.chains.get(t);if(!a)throw Error("Chain adapter not found");if(!a.networkControllerClient)throw Error("NetworkController client not set");return a.networkControllerClient},getConnectionControllerClient(e){let t=e||V.activeChain;if(!t)throw Error("Chain is required to get connection controller client");let a=V.chains.get(t);if(!a?.connectionControllerClient)throw Error("ConnectionController client not set");return a.connectionControllerClient},getAccountProp(e,t){let a=V.activeChain;if(t&&(a=t),!a)return;let r=V.chains.get(a)?.accountState;if(r)return r[e]},getNetworkProp(e,t){let a=V.chains.get(t)?.networkState;if(a)return a[e]},getRequestedCaipNetworks(e){let t=V.chains.get(e),{approvedCaipNetworkIds:a=[],requestedCaipNetworks:r=[]}=t?.networkState||{};return n.f.sortRequestedNetworks(a,r)},getAllRequestedCaipNetworks(){let e=[];return V.chains.forEach(t=>{let a=K.getRequestedCaipNetworks(t.namespace);e.push(...a)}),e},setRequestedCaipNetworks(e,t){K.setAdapterNetworkState(t,{requestedCaipNetworks:e});let a=Array.from(new Set(K.getAllRequestedCaipNetworks().map(e=>e.chainNamespace)));u.f.filterByNamespaces(a)},getAllApprovedCaipNetworkIds(){let e=[];return V.chains.forEach(t=>{let a=K.getApprovedCaipNetworkIds(t.namespace);e.push(...a)}),e},getActiveCaipNetwork:()=>V.activeCaipNetwork,getActiveCaipAddress:()=>V.activeCaipAddress,getApprovedCaipNetworkIds(e){let t=V.chains.get(e);return t?.networkState?.approvedCaipNetworkIds||[]},async setApprovedCaipNetworksData(e){let t=K.getNetworkControllerClient(),a=await t?.getApprovedCaipNetworksData();K.setAdapterNetworkState(e,{approvedCaipNetworkIds:a?.approvedCaipNetworkIds,supportsAllNetworks:a?.supportsAllNetworks})},checkIfSupportedNetwork(e,t){let a=t||V.activeCaipNetwork,r=K.getRequestedCaipNetworks(e);return!r.length||r?.some(e=>e.id===a?.id)},checkIfSupportedChainId(e){if(!V.activeChain)return!0;let t=K.getRequestedCaipNetworks(V.activeChain);return t?.some(t=>t.id===e)},setSmartAccountEnabledNetworks(e,t){K.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){let e=i.f.caipNetworkIdToNumber(V.activeCaipNetwork?.caipNetworkId),t=V.activeChain;if(!t||!e)return!1;let a=K.getNetworkProp("smartAccountEnabledNetworks",t);return!!a?.includes(Number(e))},getActiveNetworkTokenAddress(){let e=V.activeCaipNetwork?.chainNamespace||"eip155",t=V.activeCaipNetwork?.id||1,a=s.W.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${a}`},showUnsupportedChainUI(){w.f.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let e=V.activeCaipNetwork;return!!(e?.chainNamespace&&s.W.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){K.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){if(!e)throw Error("Chain is required to set account prop");V.activeCaipAddress=void 0,K.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),u.f.removeConnectorId(e)},setIsSwitchingNamespace(e){V.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){let e=[];if(V.chains.forEach(t=>{o.f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===t.namespace)&&t.namespace&&e.push(t.namespace)}),e.length>0){let t=e[0];return t?V.chains.get(t)?.caipNetworks?.[0]:void 0}},getAccountData:e=>e?K.state.chains.get(e)?.accountState:d.f.state,getNetworkData(e){let t=e||V.activeChain;if(t)return K.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;let a=K.state.chains.get(e),r=a?.caipNetworks?.find(e=>e.id===t);return r||a?.networkState?.caipNetwork||a?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let e=u.f.state.filterByNamespace;return(e?[V.chains.get(e)]:Array.from(V.chains.values())).flatMap(e=>e?.caipNetworks||[]).map(e=>e.caipNetworkId)},getCaipNetworks:e=>e?K.getRequestedCaipNetworks(e):K.getAllRequestedCaipNetworks()})},78969,28303,14919,4584,89109,22146,e=>{"use strict";e.s(["f",()=>S],78969),e.s(["f",()=>N],4584),e.s(["f",()=>v],14919),e.s(["f",()=>E],89109);var t=e.i(99762),a=e.i(57865),r=e.i(51216),o=e.i(25708),i=e.i(91643),s=e.i(98216),n=e.i(32810),c=e.i(20717),l=e.i(76977),d=e.i(35654),u=e.i(41439),p=e.i(78684),w=e.i(26598),g=e.i(74054),m=e.i(19005);let f=(0,t.s)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),h={state:f,subscribe:e=>(0,t.i)(f,()=>e(f)),subscribeOpen:e=>(0,a.T)(f,"open",e),set(e){Object.assign(f,{...f,...e})}};e.s(["f",0,h],28303);let b=(0,t.s)({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),v=(0,n.O)({state:b,subscribe:e=>(0,t.i)(b,()=>e(b)),subscribeKey:(e,t)=>(0,a.T)(b,e,t),async open(e){let t="connected"===u.f.state.status,a=e?.namespace,r=l.f.state.activeChain,o=a&&a!==r,i=l.f.getAccountData(e?.namespace)?.caipAddress;if(g.f.state.wcBasic?c.f.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await c.f.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),S.setFilterByNamespace(e?.namespace),v.setLoading(!0,a),a&&o){let e=l.f.getNetworkData(a)?.caipNetwork||l.f.getRequestedCaipNetworks(a)[0];e&&w.f.onSwitchNetwork({network:e,ignoreSwitchConfirmation:!0})}else{let t=l.f.state.noAdapters;d.f.state.manualWCControl||t&&!i?p.f.isMobile()?N.reset("AllWallets"):N.reset("ConnectingWalletConnectBasic"):e?.view?N.reset(e.view,e.data):i?N.reset("Account"):N.reset("Connect")}b.open=!0,h.set({open:!0}),m.f.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!i}})},close(){let e=d.f.state.enableEmbedded,t=!!l.f.state.activeCaipAddress;b.open&&m.f.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),b.open=!1,N.reset("Connect"),v.clearLoading(),e?t?N.replace("Account"):N.push("Connect"):h.set({open:!1}),g.f.resetUri()},setLoading(e,t){t&&b.loadingNamespaceMap.set(t,e),b.loading=e,h.set({loading:e})},clearLoading(){b.loadingNamespaceMap.clear(),b.loading=!1},shake(){b.shake||(b.shake=!0,setTimeout(()=>{b.shake=!1},500))}}),C=(0,t.s)({view:"Connect",history:["Connect"],transactionStack:[]}),N=(0,n.O)({state:C,subscribeKey:(e,t)=>(0,a.T)(C,e,t),pushTransactionStack(e){C.transactionStack.push(e)},popTransactionStack(e){let t=C.transactionStack.pop();if(!t)return;let{onSuccess:a,onError:r,onCancel:o}=t;switch(e){case"success":a?.();break;case"error":r?.(),N.goBack();break;case"cancel":o?.(),N.goBack()}},push(e,t){e!==C.view&&(C.view=e,C.history.push(e),C.data=t)},reset(e,t){C.view=e,C.history=[e],C.data=t},replace(e,t){C.history.at(-1)!==e&&(C.view=e,C.history[C.history.length-1]=e,C.data=t)},goBack(){let e=l.f.state.activeCaipAddress,a="ConnectingFarcaster"===N.state.view,r=!e&&a;if(C.history.length>1){C.history.pop();let[t]=C.history.slice(-1);t&&(e&&"Connect"===t?C.view="Account":C.view=t)}else v.close();C.data?.wallet&&(C.data.wallet=void 0),setTimeout(()=>{if(r){u.f.setFarcasterUrl(void 0,l.f.state.activeChain);let e=S.getAuthConnector();e?.provider?.reload();let a=(0,t.D)(d.f.state);e?.provider?.syncDappData?.({metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType})}},100)},goBackToIndex(e){if(C.history.length>1){C.history=C.history.slice(0,e+1);let[t]=C.history.slice(-1);t&&(C.view=t)}},goBackOrCloseModal(){N.state.history.length>1?N.goBack():v.close()}}),A=(0,t.s)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),y={state:A,subscribe:e=>(0,t.i)(A,()=>e(A)),setThemeMode(e){A.themeMode=e;try{let t=S.getAuthConnector();if(t){let a=y.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:a,w3mThemeVariables:(0,o.f)(a,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){A.themeVariables={...A.themeVariables,...e};try{let e=S.getAuthConnector();if(e){let t=y.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,o.f)(A.themeVariables,A.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,t.D)(A)},E=(0,n.O)(y),k={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},I=(0,t.s)({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...k},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),S=(0,n.O)({state:I,subscribe:e=>(0,t.i)(I,()=>{e(I)}),subscribeKey:(e,t)=>(0,a.T)(I,e,t),initialize(e){e.forEach(e=>{let t=s.f.getConnectedConnectorId(e);t&&S.setConnectorId(t,e)})},setActiveConnector(e){e&&(I.activeConnector=(0,t.C)(e))},setConnectors(e){e.filter(e=>!I.allConnectors.some(t=>t.id===e.id&&S.getConnectorName(t.name)===S.getConnectorName(e.name)&&t.chain===e.chain)).forEach(e=>{"MULTI_CHAIN"!==e.type&&I.allConnectors.push((0,t.C)(e))});let a=S.getEnabledNamespaces(),r=S.getEnabledConnectors(a);I.connectors=S.mergeMultiChainConnectors(r)},filterByNamespaces(e){Object.keys(I.filterByNamespaceMap).forEach(e=>{I.filterByNamespaceMap[e]=!1}),e.forEach(e=>{I.filterByNamespaceMap[e]=!0}),S.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){I.filterByNamespaceMap[e]=t,S.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let e=S.getEnabledNamespaces(),t=S.getEnabledConnectors(e),a=S.areAllNamespacesEnabled();I.connectors=S.mergeMultiChainConnectors(t),a?c.f.clearFilterByNamespaces():c.f.filterByNamespaces(e)},getEnabledNamespaces:()=>Object.entries(I.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e),getEnabledConnectors:e=>I.allConnectors.filter(t=>e.includes(t.chain)),areAllNamespacesEnabled:()=>Object.values(I.filterByNamespaceMap).every(e=>e),mergeMultiChainConnectors(e){let t=S.generateConnectorMapByName(e),a=[];return t.forEach(e=>{let t=e[0],o=t?.id===r.f.CONNECTOR_ID.AUTH;e.length>1&&t?a.push({name:t.name,imageUrl:t.imageUrl,imageId:t.imageId,connectors:[...e],type:o?"AUTH":"MULTI_CHAIN",chain:"eip155",id:t?.id||""}):t&&a.push(t)}),a},generateConnectorMapByName(e){let t=new Map;return e.forEach(e=>{let{name:a}=e,r=S.getConnectorName(a);if(!r)return;let o=t.get(r)||[];o.find(t=>t.chain===e.chain)||o.push(e),t.set(r,o)}),t},getConnectorName:e=>e&&({"Trust Wallet":"Trust"})[e]||e,getUniqueConnectorsByName(e){let t=[];return e.forEach(e=>{t.find(t=>t.chain===e.chain)||t.push(e)}),t},addConnector(e){if(e.id===r.f.CONNECTOR_ID.AUTH){let a=(0,t.D)(d.f.state),r=E.getSnapshot().themeMode,i=E.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),e?.provider?.syncTheme({themeMode:r,themeVariables:i,w3mThemeVariables:(0,o.f)(i,r)}),S.setConnectors([e])}else S.setConnectors([e])},getAuthConnector(e){let t=e||l.f.state.activeChain,a=I.connectors.find(e=>e.id===r.f.CONNECTOR_ID.AUTH);if(a)return a?.connectors?.length?a.connectors.find(e=>e.chain===t):a},getAnnouncedConnectorRdns:()=>I.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectorById:e=>I.allConnectors.find(t=>t.id===e),getConnector:(e,t)=>I.allConnectors.filter(e=>e.chain===l.f.state.activeChain).find(a=>a.explorerId===e||a.info?.rdns===t),syncIfAuthConnector(e){if("ID_AUTH"!==e.id)return;let a=(0,t.D)(d.f.state),r=E.getSnapshot().themeMode,i=E.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:a.metadata,sdkVersion:a.sdkVersion,sdkType:a.sdkType,projectId:a.projectId}),e.provider.syncTheme({themeMode:r,themeVariables:i,w3mThemeVariables:(0,o.f)(i,r)})},getConnectorsByNamespace(e){let t=I.allConnectors.filter(t=>t.chain===e);return S.mergeMultiChainConnectors(t)},selectWalletConnector(e){let t=S.getConnector(e.id,e.rdns),a=l.f.state.activeChain;i.z.handleMobileDeeplinkRedirect(t?.explorerId||e.id,a),t?N.push("ConnectingExternal",{connector:t}):N.push("ConnectingWalletConnect",{wallet:e})},getConnectors:e=>e?S.getConnectorsByNamespace(e):S.mergeMultiChainConnectors(I.allConnectors),setFilterByNamespace(e){I.filterByNamespace=e,I.connectors=S.getConnectors(e),c.f.setFilterByNamespace(e)},setConnectorId(e,t){e&&(I.activeConnectorIds={...I.activeConnectorIds,[t]:e},s.f.setConnectedConnectorId(t,e))},removeConnectorId(e){I.activeConnectorIds={...I.activeConnectorIds,[e]:void 0},s.f.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return I.activeConnectorIds[e]},isConnected:e=>e?!!I.activeConnectorIds[e]:Object.values(I.activeConnectorIds).some(e=>!!e),resetConnectorIds(){I.activeConnectorIds={...k}}});var T=e.i(63663);void 0!==T.default&&void 0!==T.default.env&&T.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL,void 0!==T.default&&void 0!==T.default.env&&T.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL,void 0!==T.default&&void 0!==T.default.env&&T.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION,e.s(["f",0,{SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}}],22146)},19005,1717,e=>{"use strict";e.s(["f",()=>f],19005);var t=e.i(99762),a=e.i(51216),r=e.i(26273),o=e.i(78684),i=e.i(81586),s=e.i(41439),n=e.i(57865),c=e.i(32810),l=e.i(35654);let d=(0,t.s)({message:"",variant:"info",open:!1}),u=(0,c.O)({state:d,subscribeKey:(e,t)=>(0,n.T)(d,e,t),open(e,t){let{debug:a}=l.f.state,{shortMessage:r,longMessage:o}=e;a&&(d.message=r,d.variant=t,d.open=!0),o&&console.error("function"==typeof o?o():o)},close(){d.open=!1,d.message="",d.variant="info"}});e.s(["f",0,u],1717);let p=o.f.getAnalyticsUrl(),w=new i.f({baseUrl:p,clientId:null}),g=["MODAL_CREATED"],m=(0,t.s)({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),f={state:m,subscribe:e=>(0,t.i)(m,()=>e(m)),getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:a}=l.f.state;return{projectId:e,st:t,sv:a||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{let t=s.f.state.address;if(g.includes(e.data.event)||"u"<typeof window)return;await w.post({path:"/e",params:f.getSdkProperties(),body:{eventId:o.f.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),m.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===a.f.HTTP_STATUS_CODES.FORBIDDEN&&!m.reportedErrors.FORBIDDEN&&(u.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${(0,r.v)()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),m.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){m.timestamp=Date.now(),m.data=e,l.f.state.features?.analytics&&f._sendAnalyticsEvent(m)}}},47639,e=>{"use strict";var t=e.i(99762),a=e.i(57865),r=e.i(78684);let o=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),i=(0,t.s)({...o});e.s(["f",0,{state:i,subscribeKey:(e,t)=>(0,a.T)(i,e,t),showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){let t=r.f.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){i.message=o.message,i.variant=o.variant,i.svg=o.svg,i.open=o.open,i.autoClose=o.autoClose},_showMessage({message:e,svg:t,variant:a="success",autoClose:r=o.autoClose}){i.open?(i.open=!1,setTimeout(()=>{i.message=e,i.variant=a,i.svg=t,i.open=!0,i.autoClose=r},150)):(i.message=e,i.variant=a,i.svg=t,i.open=!0,i.autoClose=r)}}])},99579,56973,e=>{"use strict";e.s(["f",()=>l],99579);var t=e.i(99762),a=e.i(20717),r=e.i(57865),o=e.i(32810);let i=(0,t.s)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),s=(0,o.O)({state:i,subscribeNetworkImages:e=>(0,t.i)(i.networkImages,()=>e(i.networkImages)),subscribeKey:(e,t)=>(0,r.T)(i,e,t),subscribe:e=>(0,t.i)(i,()=>e(i)),setWalletImage(e,t){i.walletImages[e]=t},setNetworkImage(e,t){i.networkImages[e]=t},setChainImage(e,t){i.chainImages[e]=t},setConnectorImage(e,t){i.connectorImages={...i.connectorImages,[e]:t}},setTokenImage(e,t){i.tokenImages[e]=t},setCurrencyImage(e,t){i.currencyImages[e]=t}});e.s(["f",0,s],56973);let n={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},c=(0,t.s)({networkImagePromises:{}}),l={async fetchWalletImage(e){if(e)return await a.f._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;let t=this.getNetworkImageById(e);return t||(c.networkImagePromises[e]||(c.networkImagePromises[e]=a.f._fetchNetworkImage(e)),await c.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return s.state.walletImages[e]},getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?s.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.assets?.imageUrl?e?.assets?.imageUrl:e?.assets?.imageId?s.state.networkImages[e.assets.imageId]:void 0,getNetworkImageById(e){if(e)return s.state.networkImages[e]},getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?s.state.connectorImages[e.imageId]:void 0,getChainImage:e=>s.state.networkImages[n[e]]}},97064,e=>{"use strict";var t=e.i(63663);let a=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",r={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:a,SECURE_SITE_DASHBOARD:`${a}/dashboard`,SECURE_SITE_FAVICON:`${a}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}};e.s(["W",0,r,"w",0,"WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU","F",0,[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}]])},78684,26273,98216,e=>{"use strict";var t=e.i(51216),a=e.i(97064);let r={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function o(e){if(!e)throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}let i={setItem(e,t){s()&&void 0!==t&&localStorage.setItem(e,t)},getItem(e){if(s())return localStorage.getItem(e)||void 0},removeItem(e){s()&&localStorage.removeItem(e)},clear(){s()&&localStorage.clear()}};function s(){return"u">typeof window&&"u">typeof localStorage}e.s(["y",0,i,"A",0,r,"o",0,o,"v",0,s],26273);let n={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired:(e,t)=>Date.now()-e>t,getActiveNetworkProps(){let e=n.getActiveNamespace(),t=n.getActiveCaipNetworkId(),a=t?t.split(":")[1]:void 0;return{namespace:e,caipNetworkId:t,chainId:a?isNaN(Number(a))?a:Number(a):void 0}},setWalletConnectDeepLink({name:e,href:t}){try{i.setItem(r.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=i.getItem(r.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{i.removeItem(r.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{i.setItem(r.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{i.setItem(r.ACTIVE_CAIP_NETWORK_ID,e),n.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return i.getItem(r.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{i.removeItem(r.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{let t=o(e);i.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{let t=n.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),i.setItem(r.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let e=i.getItem(r.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{let a=o(e);i.setItem(a,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return i.getItem(r.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{let t=o(e);return i.getItem(t)}catch(t){console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{i.setItem(r.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return i.getItem(r.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{i.removeItem(r.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return i.getItem(r.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){let e=i.getItem(r.ACTIVE_CAIP_NETWORK_ID);return e?.split(":")?.[1]},setConnectionStatus(e){try{i.setItem(r.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return i.getItem(r.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let e=i.getItem(r.CONNECTED_NAMESPACES);if(!e?.length)return[];return e.split(",")}catch{return[]}},setConnectedNamespaces(e){try{let t=Array.from(new Set(e));i.setItem(r.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{let t=n.getConnectedNamespaces();t.includes(e)||(t.push(e),n.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{let t=n.getConnectedNamespaces(),a=t.indexOf(e);a>-1&&(t.splice(a,1),n.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return i.getItem(r.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{i.setItem(r.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{i.removeItem(r.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{let t=i.getItem(r.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{let t=n.getBalanceCache();i.setItem(r.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{let t=n.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;n.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{let t=n.getBalanceCache();t[e.caipAddress]=e,i.setItem(r.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{let t=i.getItem(r.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{let t=n.getBalanceCache();i.setItem(r.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{let t=n.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),n.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{let t=n.getNativeBalanceCache();t[e.caipAddress]=e,i.setItem(r.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{let t=i.getItem(r.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{let t=n.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;n.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{let t=n.getEnsCache();t[e.address]=e,i.setItem(r.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{let t=n.getEnsCache();i.setItem(r.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{let t=i.getItem(r.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{let t=n.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;n.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{let t=n.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},i.setItem(r.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{let t=n.getIdentityCache();i.setItem(r.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{i.removeItem(r.PORTFOLIO_CACHE),i.removeItem(r.NATIVE_BALANCE_CACHE),i.removeItem(r.ENS_CACHE),i.removeItem(r.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{i.setItem(r.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{let e=i.getItem(r.PREFERRED_ACCOUNT_TYPES);if(!e)return{};return JSON.parse(e)}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{let a={...n.getConnections(),[t]:e};i.setItem(r.CONNECTIONS,JSON.stringify(a))}catch(e){console.error("Unable to sync connections to storage",e)}},getConnections(){try{let e=i.getItem(r.CONNECTIONS);if(!e)return{};return JSON.parse(e)}catch(e){return console.error("Unable to get connections from storage",e),{}}}};e.s(["f",0,n],98216);let c={isMobile(){return!!this.isClient()&&!!("function"==typeof window?.matchMedia&&window?.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork:(e,t="")=>e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return c.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return!!this.isClient()&&(window?.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>"u">typeof window,isPairingExpired:e=>!e||e-Date.now()<=a.W.TEN_SEC_MS,isAllowedRetry:(e,t=a.W.ONE_SEC_MS)=>Date.now()-e>=t,copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch(e){return!1}},isSafeApp(){if(c.isClient()&&window.self!==window.top)try{let e=window?.location?.ancestorOrigins?.[0];if(e){let t=new URL(e),a=new URL("https://app.safe.global");return t.hostname===a.hostname}}catch{}return!1},getPairingExpiry:()=>Date.now()+a.W.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let a;return(...r)=>{a&&clearTimeout(a),a=setTimeout(function(){e(...r)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t,a=null){if(c.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e,o=a;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),o&&!o?.endsWith("/")&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,redirectUniversalLink:o?`${o}wc?uri=${i}`:void 0,href:r}},formatUniversalUrl(e,t){if(!c.isHttpUrl(e))return this.formatNativeUrl(e,t);let a=e;a.endsWith("/")||(a=`${a}/`);let r=encodeURIComponent(t);return{redirect:`${a}wc?uri=${r}`,href:a}},getOpenTargetForPlatform(e){return"popupWindow"===e?e:this.isTelegram()?n.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,a){window?.open(e,this.getOpenTargetForPlatform(t),a||"noreferrer noopener")},returnOpenHref(e,t,a){return window?.open(e,this.getOpenTargetForPlatform(t),a||"noreferrer noopener")},isTelegram:()=>"u">typeof window&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto),isPWA(){if("u"<typeof window)return!1;let e=window.matchMedia?.("(display-mode: standalone)")?.matches,t=window?.navigator?.standalone;return!!(e||t)},preloadImage:async e=>Promise.race([new Promise((t,a)=>{let r=new Image;r.onload=t,r.onerror=a,r.crossOrigin="anonymous",r.src=e}),c.wait(2e3)]),formatBalance(e,t){let a="0.000";if("string"==typeof e){let t=Number(e);if(t){let e=Math.floor(1e3*t)/1e3;e&&(a=e.toString())}}return`${a}${t?` ${t}`:""}`},formatBalance2(e,t){let a;if("0"===e)a="0";else if("string"==typeof e){let t=Number(e);t&&(a=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:a??"0",rest:"0"===a?"000":"",symbol:t}},getApiUrl:()=>t.f.W3M_API_URL,getBlockchainApiUrl:()=>t.f.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>t.f.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let a={};return t&&e&&(e.forEach((e,t)=>{a[e]=t}),t.sort((e,t)=>{let r=a[e.id],o=a[t.id];return void 0!==r&&void 0!==o?r-o:void 0!==r?-1:1*(void 0!==o)})),t},calculateBalance(e){let t=0;for(let a of e)t+=a.value??0;return t},formatTokenBalance(e){let[t,a]=e.toFixed(2).split(".");return{dollars:t,pennies:a}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))return!0;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let a=new Set;return e.filter(e=>{let r=e[t];return!a.has(r)&&(a.add(r),!0)})},generateSdkVersion(e,t,r){let o=0===e.length?a.W.ADAPTER_TYPES.UNIVERSAL:e.map(e=>e.adapterType).join(",");return`${t}-${o}-${r}`},createAccount:(e,t,a,r,o)=>({namespace:e,address:t,type:a,publicKey:r,path:o}),isCaipAddress(e){if("string"!=typeof e)return!1;let a=e.split(":"),r=a[0];return 3===a.filter(Boolean).length&&r in t.f.CHAIN_NAME_MAP},isMac(){let e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){let t=`--${encodeURIComponent(window?.location.href)}`,a="state=";if("auth.magic.link"===new URL(e).host){let r="provider_authorization_url=",o=e.substring(e.indexOf(r)+r.length),i=this.injectIntoUrl(decodeURIComponent(o),a,t);return e.replace(o,encodeURIComponent(i))}return this.injectIntoUrl(e,a,t)},injectIntoUrl(e,t,a){let r=e.indexOf(t);if(-1===r)throw Error(`${t} parameter not found in the URL: ${e}`);let o=e.indexOf("&",r),i=t.length,s=-1!==o?o:e.length;return e.substring(0,r+i)+(e.substring(r+i,s)+a)+e.substring(o)}};e.s(["f",0,c],78684)},91643,e=>{"use strict";var t=e.i(51216);let a={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}};e.s(["L",0,a,"z",0,{handleMobileDeeplinkRedirect(e,r){let o=window.location.href,i=encodeURIComponent(o);if(e===a.PHANTOM.id&&!("phantom"in window)){let e=o.startsWith("https")?"https":"http",t=o.split("/")[2],r=encodeURIComponent(`${e}://${t}`);window.location.href=`${a.PHANTOM.url}/ul/browse/${i}?ref=${r}`}e!==a.SOLFLARE.id||"solflare"in window||(window.location.href=`${a.SOLFLARE.url}/ul/v1/browse/${i}?ref=${i}`),r!==t.f.CHAIN.SOLANA||e!==a.COINBASE.id||"coinbaseSolana"in window||(window.location.href=`${a.COINBASE.url}/dapp?cb_url=${i}`)}}])},26598,e=>{"use strict";e.s(["f",()=>s]);var t=e.i(51216),a=e.i(41439),r=e.i(76977),o=e.i(78969),i=e.i(4584);let s={onSwitchNetwork({network:e,ignoreSwitchConfirmation:s=!1}){let n=r.f.state.activeCaipNetwork,c=i.f.state.data;if(e.id===n?.id)return;let l=a.f.getCaipAddress(r.f.state.activeChain),d=e.chainNamespace!==r.f.state.activeChain,u=a.f.getCaipAddress(e.chainNamespace),p=o.f.getConnectorId(r.f.state.activeChain)===t.f.CONNECTOR_ID.AUTH,w=t.f.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===e.chainNamespace);s||p&&w?i.f.push("SwitchNetwork",{...c,network:e}):l&&d&&!u?i.f.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):i.f.push("SwitchNetwork",{...c,network:e})}}},32810,81586,35654,e=>{"use strict";var t=e.i(99762),a=e.i(57865),r=e.i(78684);async function o(...e){let t=await fetch(...e);if(!t.ok)throw Error(`HTTP status code: ${t.status}`,{cause:t});return t}class i{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:t,cache:a,...r}){let i=this.createUrl(r);return(await o(i,{method:"GET",headers:e,signal:t,cache:a})).json()}async getBlob({headers:e,signal:t,...a}){let r=this.createUrl(a);return(await o(r,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:a,...r}){let i=this.createUrl(r);return(await o(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:a})).json()}async put({body:e,headers:t,signal:a,...r}){let i=this.createUrl(r);return(await o(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:a})).json()}async delete({body:e,headers:t,signal:a,...r}){let i=this.createUrl(r);return(await o(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:a})).json()}createUrl({path:e,params:t}){let a=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&a.searchParams.append(e,t)}),this.clientId&&a.searchParams.append("clientId",this.clientId),a}}e.s(["f",0,i],81586);var s=e.i(97064);let n={getFeatureValue(e,t){let a=t?.[e];return void 0===a?s.W.DEFAULT_FEATURES[e]:a},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(r.f.isTelegram()){if(r.f.isIos())return e.filter(e=>"google"!==e);if(r.f.isMac())return e.filter(e=>"x"!==e);if(r.f.isAndroid())return e.filter(e=>!["facebook","x"].includes(e))}return e}},c=(0,t.s)({features:s.W.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:s.W.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),l={state:c,subscribeKey:(e,t)=>(0,a.T)(c,e,t),setOptions(e){Object.assign(c,e)},setRemoteFeatures(e){if(!e)return;let t={...c.remoteFeatures,...e};c.remoteFeatures=t,c.remoteFeatures?.socials&&(c.remoteFeatures.socials=n.filterSocialsByPlatform(c.remoteFeatures.socials))},setFeatures(e){if(!e)return;c.features||(c.features=s.W.DEFAULT_FEATURES);let t={...c.features,...e};c.features=t},setProjectId(e){c.projectId=e},setCustomRpcUrls(e){c.customRpcUrls=e},setAllWallets(e){c.allWallets=e},setIncludeWalletIds(e){c.includeWalletIds=e},setExcludeWalletIds(e){c.excludeWalletIds=e},setFeaturedWalletIds(e){c.featuredWalletIds=e},setTokens(e){c.tokens=e},setTermsConditionsUrl(e){c.termsConditionsUrl=e},setPrivacyPolicyUrl(e){c.privacyPolicyUrl=e},setCustomWallets(e){c.customWallets=e},setIsSiweEnabled(e){c.isSiweEnabled=e},setIsUniversalProvider(e){c.isUniversalProvider=e},setSdkVersion(e){c.sdkVersion=e},setMetadata(e){c.metadata=e},setDisableAppend(e){c.disableAppend=e},setEIP6963Enabled(e){c.enableEIP6963=e},setDebug(e){c.debug=e},setEnableWalletConnect(e){c.enableWalletConnect=e},setEnableWalletGuide(e){c.enableWalletGuide=e},setEnableAuthLogger(e){c.enableAuthLogger=e},setEnableWallets(e){c.enableWallets=e},setPreferUniversalLinks(e){c.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){c.hasMultipleAddresses=e},setSIWX(e){c.siwx=e},setConnectMethodsOrder(e){c.features={...c.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){c.features={...c.features,walletFeaturesOrder:e}},setSocialsOrder(e){c.remoteFeatures={...c.remoteFeatures,socials:e}},setCollapseWallets(e){c.features={...c.features,collapseWallets:e}},setEnableEmbedded(e){c.enableEmbedded=e},setAllowUnsupportedChain(e){c.allowUnsupportedChain=e},setManualWCControl(e){c.manualWCControl=e},setEnableNetworkSwitch(e){c.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([e,t])=>{t&&(c.defaultAccountTypes[e]=t)})},setUniversalProviderConfigOverride(e){c.universalProviderConfigOverride=e},getUniversalProviderConfigOverride:()=>c.universalProviderConfigOverride,getSnapshot:()=>(0,t.D)(c)};e.s(["f",0,l],35654);let d=Object.freeze({enabled:!0,events:[]}),u=new i({baseUrl:r.f.getAnalyticsUrl(),clientId:null}),p=(0,t.s)({...d}),w={state:p,subscribeKey:(e,t)=>(0,a.T)(p,e,t),async sendError(e,t){if(!p.enabled)return;let a=Date.now();if(p.events.filter(e=>a-new Date(e.properties.timestamp||"").getTime()<6e4).length>=5)return;let o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};p.events.push(o);try{if("u"<typeof window)return;let{projectId:a,sdkType:o,sdkVersion:i}=l.state;await u.post({path:"/e",params:{projectId:a,st:o,sv:i||"html-wagmi-4.2.2"},body:{eventId:r.f.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){p.enabled=!0},disable(){p.enabled=!1},clearEvents(){p.events=[]}};class g extends Error{constructor(e,t,a){super(e),this.name="AppKitError",this.category=t,this.originalError=a,Object.setPrototypeOf(this,g.prototype);let r=!1;if(a instanceof Error&&"string"==typeof a.stack&&a.stack){let e=a.stack,t=e.indexOf("\n");if(t>-1){let a=e.substring(t+1);this.stack=`${this.name}: ${this.message}
${a}`,r=!0}}!r&&(Error.captureStackTrace?Error.captureStackTrace(this,g):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function m(e,t){let a=e instanceof g?e:new g(e instanceof Error?e.message:String(e),t,e);throw w.sendError(a,a.category),a}e.s(["v",0,g,"O",0,function(e,t="INTERNAL_SDK_ERROR"){let a={};return Object.keys(e).forEach(r=>{let o=e[r];if("function"==typeof o){let e=o;e="AsyncFunction"===o.constructor.name?async(...e)=>{try{return await o(...e)}catch(e){return m(e,t)}}:(...e)=>{try{return o(...e)}catch(e){return m(e,t)}},a[r]=e}else a[r]=o}),a}],32810)},58284,e=>{"use strict";var t=e.i(63663);let a={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};e.s(["f",0,a])},13351,39482,e=>{"use strict";let t,a,r;e.i(95126);var o=e.i(40697),i=e.i(25708);function s(e){a&&r&&("light"===e?(a.removeAttribute("media"),r.media="enabled"):(r.removeAttribute("media"),a.media="enabled"))}function n(e){return{core:o.m`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,o.N)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,o.N)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,o.N)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,o.N)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,o.N)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:o.m`
      :root {
        --w3m-color-mix: ${(0,o.N)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,o.N)((0,i.f)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,o.N)((0,i.f)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:o.m`
      :root {
        --w3m-color-mix: ${(0,o.N)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,o.N)((0,i.f)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,o.N)((0,i.f)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}let c=o.m`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,l=o.m`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,d=o.m`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;e.s(["G",0,d,"j",0,l,"k",0,function(e,o){t=document.createElement("style"),a=document.createElement("style"),r=document.createElement("style"),t.textContent=n(e).core.cssText,a.textContent=n(e).dark.cssText,r.textContent=n(e).light.cssText,document.head.appendChild(t),document.head.appendChild(a),document.head.appendChild(r),s(o)},"e",0,c,"H",0,s,"m",0,function(e){t&&a&&r&&(t.textContent=n(e).core.cssText,a.textContent=n(e).dark.cssText,r.textContent=n(e).light.cssText)}],39482),e.s([],13351)},99762,e=>{"use strict";Symbol();let t=Symbol(),a=Object.getPrototypeOf,r=new WeakMap,o=e=>{let o;return(o=e)&&(r.has(o)?r.get(o):a(o)===Object.prototype||a(o)===Array.prototype)&&e[t]||null},i=(e,t=!0)=>{r.set(e,t)};var s={get url(){return e.F("node_modules/.pnpm/valtio@1.13.2_@types+react@19.3.0_react@19.3.1/node_modules/valtio/esm/vanilla.mjs")},env:{DEV:!1,PROD:!0,MODE:"production",BASE_URL:"/",SSR:!1}};let n=e=>"object"==typeof e&&null!==e,c=new WeakMap,l=new WeakSet,d=(e=Object.is,t=(e,t)=>new Proxy(e,t),a=e=>n(e)&&!l.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),r=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},d=new WeakMap,u=(e,t,a=r)=>{let o=d.get(e);if((null==o?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(s,!0),d.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let r=Reflect.get(e,t),{enumerable:o}=Reflect.getOwnPropertyDescriptor(e,t),n={value:r,enumerable:o,configurable:!0};if(l.has(r))i(r,!1);else if(r instanceof Promise)delete n.value,n.get=()=>a(r);else if(c.has(r)){let[e,t]=c.get(r);n.value=u(e,t(),a)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},p=new WeakMap,w=[1,1],g=r=>{if(!n(r))throw Error("object required");let i=p.get(r);if(i)return i;let d=w[0],m=new Set,f=(e,t=++w[0])=>{d!==t&&(d=t,m.forEach(a=>a(e,t)))},h=w[1],b=(e=++w[1])=>(h===e||m.size||(h=e,C.forEach(([t])=>{let a=t[1](e);a>d&&(d=a)})),d),v=e=>(t,a)=>{let r=[...t];r[1]=[e,...r[1]],f(r,a)},C=new Map,N=(e,t)=>{if("production"!==s.env.MODE&&C.has(e),m.size){let a=t[3](v(e));C.set(e,[t,a])}else C.set(e,[t])},A=e=>{var t;let a=C.get(e);a&&(C.delete(e),null==(t=a[1])||t.call(a))},y=e=>{m.add(e),1===m.size&&C.forEach(([e,t],a)=>{let r=e[3](v(a));C.set(a,[e,r])});let t=()=>{m.delete(e),0===m.size&&C.forEach(([e,t],a)=>{t&&(t(),C.set(a,[e]))})};return t},E=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),k={deleteProperty(e,t){let a=Reflect.get(e,t);A(t);let r=Reflect.deleteProperty(e,t);return r&&f(["delete",[t],a]),r},set(t,r,i,s){let d=Reflect.has(t,r),u=Reflect.get(t,r,s);if(d&&(e(u,i)||p.has(i)&&e(u,p.get(i))))return!0;A(r),n(i)&&(i=o(i)||i);let w=i;if(i instanceof Promise)i.then(e=>{i.status="fulfilled",i.value=e,f(["resolve",[r],e])}).catch(e=>{i.status="rejected",i.reason=e,f(["reject",[r],e])});else{!c.has(i)&&a(i)&&(w=g(i));let e=!l.has(w)&&c.get(w);e&&N(r,e)}return Reflect.set(t,r,w,s),f(["set",[r],i,u]),!0}},I=t(E,k);p.set(r,I);let S=[E,b,u,y];return c.set(I,S),Reflect.ownKeys(r).forEach(e=>{let t=Object.getOwnPropertyDescriptor(r,e);"value"in t&&(I[e]=r[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),I})=>[g,c,l,e,t,a,r,d,u,p,w],[u]=d();e.s(["d",0,function(e){let t=c.get(e);return null==t?void 0:t[1]()},"s",0,function(e={}){return u(e)},"C",0,function(e){return l.add(e),e},"D",0,function(e,t){let[a,r,o]=c.get(e);return o(a,r(),t)},"i",0,function(e,t,a){let r,o=c.get(e),i=[],s=o[3],n=!1,l=s(e=>{(i.push(e),a)?t(i.splice(0)):r||(r=Promise.resolve().then(()=>{r=void 0,n&&t(i.splice(0))}))});return n=!0,()=>{n=!1,l()}},"Y",0,d],99762)},57865,e=>{"use strict";var t=e.i(99762);new WeakMap,new WeakMap,Symbol(),e.s(["I",0,function(e){let a=(0,t.s)({data:Array.from(e||[]),has(e){return this.data.some(t=>t[0]===e)},set(e,t){let a=this.data.find(t=>t[0]===e);return a?a[1]=t:this.data.push([e,t]),this},get(e){var t;return null==(t=this.data.find(t=>t[0]===e))?void 0:t[1]},delete(e){let t=this.data.findIndex(t=>t[0]===e);return -1!==t&&(this.data.splice(t,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(e){this.data.forEach(t=>{e(t[1],t[0],this)})},keys(){return this.data.map(e=>e[0]).values()},values(){return this.data.map(e=>e[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(a,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(a),a},"T",0,function(e,a,r,o){let i=e[a];return(0,t.i)(e,()=>{let t=e[a];Object.is(i,t)||r(i=t)},o)}],57865)}]);