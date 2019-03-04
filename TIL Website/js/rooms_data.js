var roomsDict = {'GB': {'Ongoing': {'248': ['2/3-2019'], '304': ['4/1-2018'], '120': ['2/3-2019'], '303': ['4/1-2018'], '220': ['2/3-2019'], '244': ['2/3-2019'], '221': ['2/3-2019'], '119': ['2/3-2019']}}, 'AP': {'Ongoing': {'120': ['2/3-2019'], '124': ['2/3-2019']}}, 'AB': {'Ongoing': {'114': ['1/2-2019']}}, 'BF': {'Ongoing': {'316': ['4/1-2018'], '315': ['4/1-2018'], '214': ['4/1-2018'], '323': ['4/1-2018'], '215': ['4/1-2018']}}, 'RW': {'Pilot': {'140': ['2/3-2017'], '142': ['2/3-2017'], '143': ['2/3-2017']}}, 'HS': {'Completed': {'614': ['2/3-2017'], '715': ['2/3-2017'], '705': ['2/3-2018'], '696': ['2/3-2017'], '618': ['2/3-2017']}, 'Ongoing': {'610': ['2/3-2022'], '106': ['2/3-2021']}, 'Pilot': {'100': ['2/3-2017'], '108': ['2/3-2017'], '610': ['4/3-2018']}}, 'SS': {'Ongoing': {'2108': ['2/3-2020'], '1070': ['2/3-2021'], '1088': ['2/3-2021'], '2135': ['2/3-2021'], '1085': ['2/3-2021'], '2105': ['2/3-2019'], '2120': ['2/3-2019'], '2110': ['2/3-2020'], '2104': ['2/3-2019'], '2116': ['2/3-2019'], '1084': ['2/3-2021'], '1083': ['2/3-2021'], '1080': ['2/3-2019'], '1078': ['2/3-2019'], '2101': ['2/3-2019'], '1086': ['2/3-2021'], '2114': ['2/3-2019'], '2106': ['2/3-2020'], '1087': ['2/3-2021'], '2112': ['2/3-2019'], '2125': ['4/1-2021'], '2119': ['2/3-2019']}, 'Pilot': {'2125': ['4/1-2018']}}, 'WE': {'Ongoing': {'76': ['2/3-2020'], '69': ['2/3-2020'], '74': ['2/3-2020'], '75': ['2/3-2020']}}, 'RL': {'Completed': {'14190': ['2/3-2018']}}, 'MB': {'Ongoing': {'128': ['2/3-2022']}}, 'SF': {'Ongoing': {'3202': ['2/3-2020'], '1105': ['2/3-2021']}, 'Pilot': {'3201': ['2/3-2017']}}, 'ES': {'Ongoing': {'B142': ['2/3-2019'], '4001': ['2/3-2022']}}, 'PB': {'Ongoing': {'255': ['2/3-2021'], 'B150': ['2/3-2021'], 'B250': ['2/3-2021']}}, 'UC': {'Ongoing': {'53': ['2/3-2021'], '69': ['4/1-2019'], '52': ['2/3-2021'], '55': ['2/3-2021'], '144': ['2/3-2020'], '248': ['2/3-2020'], '177': ['1/2-2020'], '257': ['2/3-2020'], 'D301': ['2/3-2020'], '65': ['4/1-2019'], 'F204': ['2/3-2020'], '244': ['2/3-2020'], '87': ['1/2-2020'], '256': ['2/3-2020'], '63': ['4/1-2019'], '148': ['2/3-2020'], '85': ['1/2-2020'], '67': ['4/1-2019'], '255': ['2/3-2020'], '163': ['4/1-2019'], '57': ['2/3-2021'], 'B203': ['2/3-2020'], '175': ['1/2-2020'], '140': ['2/3-2020'], '44': ['2/3-2021'], '51': ['2/3-2021']}, 'Pilot': {'152': ['4/1-2018']}}, 'BL': {'Completed': {'113': ['2/3-2017'], '312': ['2/3-2017'], '306': ['2/3-2017'], '327': ['2/3-2017'], '305': ['2/3-2017']}}, 'BA': {'Ongoing': {'1130': ['2/3-2020'], '2185': ['1/2-2019'], '1170': ['2/3-2021'], '2179': ['2/3-2019'], '2155': ['1/2-2019'], '1230': ['2/3-2021'], 'B024': ['2/3-2019'], '2165': ['1/2-2019'], '1240': ['2/3-2021'], '1190': ['2/3-2020'], '2135': ['2/3-2019'], '1200': ['2/3-2020'], 'B025': ['2/3-2019'], '1210': ['2/3-2020'], '1180': ['2/3-2021'], '2175': ['1/2-2019'], 'B026': ['2/3-2019'], '2145': ['1/2-2019'], '1220': ['2/3-2021'], '2139': ['1/2-2019'], '2159': ['2/3-2019'], '1160': ['2/3-2021'], '2195': ['1/2-2019']}}, 'WI': {'Completed': {}, 'Ongoing': {'2006': ['2/3-2021'], '524': ['4/1-2018'], '523': ['4/1-2018']}, 'Pilot': {'2006': ['2/3-2017'], '524': ['2/3-2017'], '523': ['2/3-2017']}}, 'WW': {'Ongoing': {'119': ['1/2-2019'], '121': ['1/2-2019'], '126': ['1/2-2019'], '120': ['1/2-2019']}}, 'OI': {'Completed': {'5280': ['2/3-2018'], '5270': ['2/3-2018']}, 'Ongoing': {'2286': ['4/1-2019'], '2279': ['4/1-2019'], '5240': ['1/2-2021'], '4426': ['4/1-2020'], '5230': ['1/2-2021'], '8170': ['4/1-2020'], '3311': ['4/1-2020'], '4410': ['4/1-2020'], 'C154': ['2/3-2019'], '8214': ['2/3-2019'], '8200': ['4/1-2020'], '2296': ['1/2-2020'], '11200': ['2/3-2019'], '5170': ['1/2-2021'], '8201': ['4/1-2020'], '2295': ['1/2-2020'], 'G162': ['2/3-2020'], '5160': ['1/2-2021'], '8180': ['4/1-2020'], '5150': ['1/2-2021'], '8280': ['2/3-2019'], '8220': ['2/3-2019'], '2212': ['2/3-2020'], '2214': ['2/3-2020'], '10204': ['2/3-2019'], '5250': ['1/2-2021']}, 'Pilot': {'3312': ['2/3-2017'], '4414': ['2/3-2017'], '4422': ['2/3-2016'], '5290': ['2/3-2017'], '4416': ['2/3-2017'], '3310': ['2/3-2017'], '2211': ['2/3-2017'], '5260': ['2/3-2017'], '2205': ['2/3-2017']}}, 'WB': {'Ongoing': {'130': ['4/1-2018'], '219': ['4/1-2018'], '119': ['4/1-2018']}}, 'KP': {'Ongoing': {'113': ['2/3-2019']}}, 'MP': {'Ongoing': {'202': ['2/3-2020'], '203': ['2/3-2020']}, 'Pilot': {'118': ['2/3-2017']}}, 'SK': {'Ongoing': {'418': ['1/2-2022'], '548': ['2/3-2022'], '346': ['1/2-2022'], '100': ['4/1-2021'], '218': ['4/1-2021'], '114': ['2/3-2021'], '702': ['1/2-2022'], '348': ['1/2-2022'], '222': ['4/1-2021']}}, 'LM': {'Ongoing': {'157': ['2/3-2020'], '159': ['2/3-2020'], '155': ['2/3-2020'], '123': ['2/3-2020']}, 'Pilot': {'158': ['2/3-2017']}}, 'MS': {'Ongoing': {'2394': ['2/3-2021'], '2290': ['2/3-2021'], '2158': ['2/3-2019'], '3154': ['2/3-2022'], '3153': ['2/3-2022'], '3290': ['2/3-2021']}}};

var roomsWith360Images = {'HS': ['100', '108'], 'OI': ['4422 (1)', '4422 (4)', '4422', '4422 (3)']};

var roomsToScopeDict = {'AP120': [1, 1, 1, 1, 1, 1], 'AP124': [1, 1, 1, 1, 1, 1], 'AB114': [0, 1, 1, 1, 1, 1], 'BA1130': [1, 1, 1, 0, 1, 1], 'BA1160': [1, 1, 1, 1, 1, 1], 'BA1170': [1, 0, 1, 1, 1, 1], 'BA1180': [1, 1, 1, 1, 1, 1], 'BA1190': [1, 1, 1, 1, 1, 1], 'BA1200': [1, 1, 1, 0, 1, 1], 'BA1210': [1, 1, 1, 0, 0, 1], 'BA1220': [1, 1, 1, 0, 0, 1], 'BA1230': [1, 1, 1, 1, 1, 1], 'BA1240': [1, 1, 1, 1, 1, 1], 'BA2135': [1, 1, 1, 1, 1, 1], 'BA2139': [1, 1, 1, 1, 1, 1], 'BA2145': [1, 1, 1, 1, 1, 1], 'BA2155': [1, 1, 1, 1, 1, 1], 'BA2159': [1, 1, 0, 1, 1, 1], 'BA2165': [1, 1, 1, 1, 1, 1], 'BA2175': [1, 1, 1, 1, 1, 1], 'BA2179': [1, 1, 0, 1, 1, 1], 'BA2185': [1, 1, 1, 1, 1, 1], 'BA2195': [1, 1, 1, 1, 1, 1], 'BAB024': [1, 1, 1, 1, 1, 1], 'BAB025': [1, 1, 1, 1, 1, 1], 'BAB026': [1, 0, 1, 1, 1, 1], 'BF214': [1, 0, 0, 1, 1, 1], 'BF215': [1, 1, 1, 1, 1, 1], 'BF315': [1, 0, 1, 1, 1, 1], 'BF316': [1, 0, 1, 1, 1, 1], 'BF323': [1, 1, 1, 1, 1, 1], 'BL113': {'2/3-2017': [0, 0, 0, 1, 0, 0], '2/3-2019': [0, 0, 0, 0, 0, 1]}, 'BL305': {'2/3-2017': [0, 0, 1, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'BL306': {'2/3-2017': [0, 0, 0, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'BL312': {'2/3-2017': [0, 0, 0, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'BL327': {'2/3-2017': [0, 0, 0, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'ES4001': [1, 1, 1, 1, 1, 1], 'ESB142': [1, 1, 1, 1, 1, 1], 'GB119': [0, 0, 0, 0, 1, 1], 'GB120': [0, 0, 0, 0, 1, 1], 'GB220': [0, 0, 0, 0, 1, 1], 'GB221': [0, 0, 0, 0, 1, 1], 'GB244': [0, 0, 0, 0, 1, 1], 'GB248': [0, 0, 0, 0, 1, 1], 'GB303': [1, 1, 1, 1, 1, 1], 'GB304': [1, 1, 1, 1, 1, 1], 'HS100': [0, 0, 1, 0, 0, 0], 'HS106': [1, 1, 1, 1, 1, 1], 'HS108': [0, 0, 1, 0, 0, 0], 'HS610': [1, 1, 1, 0, 0, 0], 'HS614': {'2/3-2017': [0, 0, 1, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'HS618': {'2/3-2017': [0, 0, 0, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'HS696': {'2/3-2017': [0, 0, 1, 1, 0, 0]}, 'HS705': {'2/3-2018': [0, 0, 1, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'HS715': {'2/3-2017': [0, 0, 1, 1, 0, 0], '1/2-2021': [0, 0, 0, 0, 0, 1]}, 'KP108': {'2017': [0, 0, 0, 0, 0, 0]}, 'KP113': [1, 0, 0, 1, 1, 0], 'LM123': [1, 0, 0, 1, 1, 1], 'LM155': [1, 1, 1, 0, 0, 1], 'LM157': [1, 1, 1, 0, 0, 1], 'LM158': {'2017': [0, 0, 1, 0, 0, 0]}, 'LM159': [1, 0, 0, 1, 1, 1], 'MB128': [0, 0, 0, 0, 0, 1], 'MP118': {'2017': [0, 0, 1, 1, 0, 0]}, 'MP202': [1, 1, 1, 0, 0, 1], 'MP203': [1, 1, 1, 0, 0, 1], 'MS2158': {'2/3-2019': [1, 1, 0, 1, 1, 1]}, 'MS2290': [1, 0, 1, 1, 1, 1], 'MS2394': [1, 0, 0, 1, 1, 1], 'MS3153': [1, 0, 0, 1, 1, 1], 'MS3154': [1, 0, 0, 1, 1, 1], 'MS3290': [1, 0, 0, 1, 1, 1], 'OI10204': [1, 1, 1, 1, 1, 1], 'OI11200': [1, 0, 1, 1, 1, 1], 'OI2205': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI2211': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI2212': [1, 1, 1, 1, 1, 1], 'OI2214': [1, 0, 0, 1, 1, 1], 'OI2279': [1, 0, 1, 1, 1, 1], 'OI2286': [1, 1, 0, 1, 1, 1], 'OI2295': [1, 0, 1, 0, 0, 1], 'OI2296': [1, 0, 0, 1, 1, 1], 'OI3310': {'2017': [0, 0, 0, 1, 0, 0]}, 'OI3311': [1, 0, 0, 1, 1, 1], 'OI3312': {'2017': [0, 0, 0, 1, 0, 0]}, 'OI4410': [1, 1, 1, 1, 1, 1], 'OI4414': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI4416': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI4422': {'2016': [0, 0, 1, 1, 0, 0]}, 'OI4426': [1, 0, 0, 1, 1, 1], 'OI5150': [1, 0, 0, 1, 1, 1], 'OI5160': [1, 0, 0, 1, 1, 1], 'OI5170': [1, 0, 0, 1, 1, 1], 'OI5230': [1, 0, 0, 1, 1, 1], 'OI5240': [1, 0, 0, 1, 1, 1], 'OI5250': [1, 0, 0, 1, 1, 1], 'OI5260': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI5270': {'2/3-2018': [0, 0, 1, 1, 0, 0]}, 'OI5280': {'2/3-2018': [0, 0, 1, 1, 0, 0]}, 'OI5290': {'2017': [0, 0, 1, 1, 0, 0]}, 'OI8170': [1, 0, 0, 1, 1, 1], 'OI8180': [1, 0, 0, 1, 1, 1], 'OI8200': [1, 0, 0, 1, 1, 1], 'OI8201': [1, 0, 0, 1, 1, 1], 'OI8214': [1, 1, 0, 1, 1, 1], 'OI8220': [1, 1, 0, 1, 1, 1], 'OI8280': [1, 1, 1, 1, 1, 1], 'OIC154': [1, 1, 0, 1, 1, 1], 'OIG162': [1, 1, 1, 1, 1, 1], 'PB255': [1, 0, 0, 1, 1, 1], 'PBB150': [1, 0, 1, 1, 1, 1], 'PBB250': [1, 0, 1, 1, 1, 1], 'RL14190': [0, 0, 1, 1, 0, 0], 'RW140': {'2017': [0, 0, 1, 1, 0, 0]}, 'RW142': {'2017': [0, 0, 1, 1, 0, 0]}, 'RW143': {'2017': [0, 0, 1, 1, 0, 0]}, 'SF1105': [1, 1, 1, 1, 1, 1], 'SF3201': {'2017': [0, 0, 1, 1, 0, 0]}, 'SF3202': [1, 1, 1, 1, 1, 1], 'SS1070': [1, 1, 1, 0, 0, 1], 'SS1078': [1, 0, 0, 1, 1, 1], 'SS1080': [1, 1, 1, 1, 1, 1], 'SS1083': [1, 1, 1, 1, 1, 1], 'SS1084': [1, 1, 1, 1, 1, 1], 'SS1085': [1, 1, 1, 1, 1, 1], 'SS1086': [1, 1, 1, 1, 1, 1], 'SS1087': [1, 1, 1, 1, 1, 1], 'SS1088': [1, 0, 0, 1, 1, 1], 'SS2101': [1, 1, 0, 1, 1, 1], 'SS2104': [1, 1, 0, 1, 1, 1], 'SS2105': [1, 1, 1, 0, 0, 1], 'SS2106': [1, 1, 1, 0, 0, 1], 'SS2108': [1, 1, 1, 0, 0, 1], 'SS2110': [1, 1, 1, 0, 0, 1], 'SS2111': [0, 0, 0, 0, 0, 1], 'SS2112': [1, 0, 0, 1, 1, 1], 'SS2114': [1, 0, 0, 1, 1, 1], 'SS2116': [1, 0, 1, 1, 1, 1], 'SS2119': [1, 0, 1, 1, 1, 1], 'SS2120': [1, 1, 0, 1, 1, 1], 'SS2125': [0, 0, 1, 0, 0, 0], 'SS2135': [1, 0, 1, 0, 0, 1], 'SK100': [1, 0, 0, 1, 1, 1], 'SK114': [1, 0, 1, 1, 1, 1], 'SK218': [1, 0, 1, 1, 1, 1], 'SK222': [1, 1, 1, 1, 1, 1], 'SK346': [1, 0, 1, 1, 1, 1], 'SK348': [1, 0, 1, 1, 1, 1], 'SK418': [1, 1, 1, 1, 1, 1], 'SK548': [1, 1, 1, 1, 1, 1], 'SK702': [1, 1, 1, 1, 1, 1], 'UC140': [1, 1, 1, 1, 1, 1], 'UC144': [1, 1, 1, 1, 1, 1], 'UC148': [1, 1, 1, 1, 1, 1], 'UC152': {'2018': [1, 0, 1, 1, 0, 0]}, 'UC163': [1, 1, 1, 1, 1, 1], 'UC175': [1, 0, 1, 1, 1, 1], 'UC177': [1, 1, 1, 1, 1, 1], 'UC244': [1, 1, 1, 1, 1, 1], 'UC248': [1, 1, 1, 1, 1, 1], 'UC255': [1, 1, 1, 1, 1, 1], 'UC256': [1, 1, 1, 1, 1, 1], 'UC257': [1, 1, 1, 1, 1, 1], 'UC44': [1, 1, 0, 1, 1, 1], 'UC51': [1, 1, 0, 1, 1, 1], 'UC52': [1, 1, 1, 0, 0, 1], 'UC53': [1, 1, 0, 1, 1, 1], 'UC55': [1, 1, 0, 1, 1, 1], 'UC57': [1, 1, 0, 1, 1, 1], 'UC63': [1, 1, 0, 1, 1, 1], 'UC65': [1, 1, 0, 1, 1, 1], 'UC67': [1, 1, 0, 1, 1, 1], 'UC69': [1, 1, 0, 1, 1, 1], 'UC85': [1, 1, 1, 1, 1, 1], 'UC87': [1, 1, 1, 1, 1, 1], 'UCB203': [1, 0, 0, 1, 1, 1], 'UCD301': [1, 1, 0, 1, 1, 1], 'UCF204': [1, 1, 0, 1, 1, 1], 'WB119': [1, 1, 1, 1, 1, 1], 'WB130': [1, 1, 1, 0, 0, 1], 'WB219': [1, 1, 1, 0, 0, 1], 'WE69': [1, 0, 0, 1, 1, 1], 'WE74': [1, 0, 0, 1, 1, 1], 'WE75': [1, 0, 0, 1, 1, 1], 'WE76': [1, 1, 0, 1, 1, 1], 'WI2006': {'2017': [0, 0, 1, 0, 0, 0], '2/3-2021': [1, 0, 0, 1, 1, 1]}, 'WI523': {'2017': [0, 0, 1, 0, 0, 0], '4/1-2018': [1, 1, 0, 0, 0, 1]}, 'WI524': {'2017': [0, 0, 1, 0, 0, 0], '4/1-2018': [1, 1, 0, 0, 0, 1]}, 'WW119': [1, 1, 1, 0, 0, 1], 'WW120': [1, 1, 1, 0, 0, 1], 'WW121': [1, 1, 1, 0, 0, 1], 'WW126': [1, 1, 1, 0, 0, 1]};

var fullform = {'GB': 'Galbraith', 'AP': 'Anthropology Building', 'AB': 'Astronomy and Astrophysics', 'BF': 'Bancroft Building', 'RW': 'Ramsay Wright Laboratories', 'HS': 'Health Sciences', 'SS': 'Sidney Smith Hall', 'WE': 'Wetmore Hall - New College', 'RL': 'Robarts Library', 'MB': 'Mining Building', 'SF': 'Sandford Fleming', 'ES': 'Earth Sciences Centre', 'PB': 'Pharmacy', 'UC': 'University College', 'BL': 'Bissell Building', 'BA': 'Bahen Centre', 'WI': 'Wilson Hall - New College', 'WW': 'Woodsworth College', 'OI': 'OISE', 'WB': 'Wallberg', 'KP': 'Koffler House', 'MP': 'McLennan Physical Laboratories', 'SK': 'Social Work', 'LM': 'Lash Miller Chemical Labs', 'MS': 'Medical Sciences'};