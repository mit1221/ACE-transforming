var rooms_dict = {'AB': {'Completed': {}, 'Ongoing': {'114': '1/2-2019'}, 'Pilot': {}}, 'BA': {'Completed': {}, 'Ongoing': {'1130': '2/3-2019', '1160': '2/3-2020', '1170': '2/3-2020', '1180': '2/3-2020', '1190': '2/3-2019', '1200': '2/3-2019', '1210': '2/3-2020', '1220': '2/3-2020', '1230': '2/3-2020', '1240': '2/3-2020', '2139': '1/2-2019', '2145': '1/2-2019', '2155': '1/2-2019', '2165': '1/2-2019', '2175': '1/2-2019', '2185': '1/2-2019', '2195': '1/2-2019'}, 'Pilot': {}}, 'BF': {'Completed': {}, 'Ongoing': {'214': '4/1-2018', '215': '4/1-2018', '315': '4/1-2018', '316': '4/1-2018', '323': '4/1-2018'}, 'Pilot': {}}, 'BL': {'Completed': {}, 'Ongoing': {'113': '1/2-2021', '305': '1/2-2021', '306': '1/2-2021', '312': '1/2-2021', '327': '1/2-2021'}, 'Pilot': {}}, 'ES': {'Completed': {}, 'Ongoing': {'4001': '2/3-2019', 'B142': '2/3-2019'}, 'Pilot': {}}, 'GB': {'Completed': {}, 'Ongoing': {'303': '4/1-2018', '304': '4/1-2018'}, 'Pilot': {}}, 'HS': {'Completed': {}, 'Ongoing': {'106': '2/3-2020', '610': '1/2-2021', '614': '1/2-2021', '618': '1/2-2021', '696': '1/2-2021', '705': '1/2-2021', '715': '1/2-2021'}, 'Pilot': {'100': '2/3-2017', '108': '2/3-2017', '614': '2/3-2017', '618': '2/3-2017', '696': '2/3-2017', '705': '2/3-2017', '715': '2/3-2017'}}, 'LM': {'Completed': {}, 'Ongoing': {'123': '1/2-2020', '155': '1/2-2020', '157': '1/2-2020', '159': '2/3-2019'}, 'Pilot': {}}, 'MC': {'Completed': {}, 'Ongoing': {}, 'Pilot': {}}, 'MP': {'Completed': {}, 'Ongoing': {'202': '2/3-2019', '203': '2/3-2019'}, 'Pilot': {}}, 'MS': {'Completed': {}, 'Ongoing': {'2290': '2/3-2019', '2394': '2/3-2019', '3153': '4/1-2020', '3154': '4/1-2020', '3290': '2/3-2019'}, 'Pilot': {}}, 'OI': {'Completed': {}, 'Ongoing': {'11200': '2/3-2019', '2212': '4/1-2020', '2214': '4/1-2020', '2279': '4/1-2020', '2286': '4/1-2020', '2295': '4/1-2020', '2296': '4/1-2020', '3311': '4/1-2020', '4410': '4/1-2020', '4426': '4/1-2020', '5150': '4/1-2020', '5160': '4/1-2020', '5170': '4/1-2020', '5230': '4/1-2020', '5240': '4/1-2020', '5250': '4/1-2020', '8170': '4/1-2020', '8180': '4/1-2020', '8200': '4/1-2020', '8201': '4/1-2020', '8214': '2/3-2019', '8220': '2/3-2019', '8280': '2/3-2019', 'G162': '2/3-2019'}, 'Pilot': {'2205': '2/3-2017', '2211': '2/3-2017', '4414': '2/3-2017', '4416': '2/3-2017', '5260': '2/3-2017', '5270': '2/3-2017', '5280': '2/3-2017', '5290': '2/3-2017'}}, 'PB': {'Completed': {}, 'Ongoing': {'255': '2/3-2020', 'B150': '2/3-2020', 'B250': '2/3-2020'}, 'Pilot': {}}, 'SF': {'Completed': {}, 'Ongoing': {'1105': '2/3-2020', '3202': '2/3-2019'}, 'Pilot': {}}, 'SK': {'Completed': {}, 'Ongoing': {'100': '1/2-2021', '114': '1/2-2021', '218': '1/2-2021', '222': '1/2-2021', '346': '1/2-2021', '348': '1/2-2021', '418': '1/2-2021', '548': '1/2-2021', '702': '1/2-2021'}, 'Pilot': {}}, 'SS': {'Completed': {}, 'Ongoing': {'1070': '2/3-2019', '1078': '2/3-2019', '1080': '2/3-2019', '1083': '2/3-2019', '1084': '2/3-2019', '1085': '2/3-2019', '1086': '2/3-2019', '1087': '2/3-2019', '1088': '2/3-2019', '2101': '2/3-2019', '2104': '2/3-2019', '2105': '2/3-2019', '2106': '2/3-2019', '2108': '2/3-2019', '2110': '2/3-2019', '2112': '2/3-2019', '2114': '2/3-2019', '2116': '2/3-2019', '2119': '2/3-2019', '2120': '2/3-2019', '2125': '1/2-2021', '2135': '2/3-2019'}, 'Pilot': {}}, 'UC': {'Completed': {}, 'Ongoing': {'140': '2/3-2020', '144': '2/3-2020', '148': '2/3-2020', '152': '1/2-2021', '163': '4/1-2019', '175': '4/1-2019', '177': '4/1-2019', '244': '1/2-2020', '248': '1/2-2020', '255': '1/2-2020', '256': '1/2-2020', '257': '1/2-2020', '44': '4/1-2019', '51': '4/1-2019', '52': '4/1-2019', '53': '4/1-2019', '55': '4/1-2019', '57': '4/1-2019', '63': '4/1-2019', '65': '4/1-2019', '67': '4/1-2019', '69': '4/1-2019', '85': '4/1-2019', '87': '4/1-2019', 'B203': '1/2-2020', 'D301': '1/2-2020', 'F204': '1/2-2020'}, 'Pilot': {}}, 'WB': {'Completed': {}, 'Ongoing': {'119': '4/1-2018', '130': '4/1-2018', '219': '4/1-2018'}, 'Pilot': {}}, 'WE': {'Completed': {}, 'Ongoing': {'69': '2/3-2019', '74': '2/3-2019', '75': '2/3-2019', '76': '2/3-2019'}, 'Pilot': {}}, 'WI': {'Completed': {}, 'Ongoing': {'2006': '2/3-2019', '523': '4/1-2019', '524': '4/1-2019'}, 'Pilot': {}}, 'WW': {'Completed': {}, 'Ongoing': {'119': '1/2-2019', '120': '1/2-2019', '121': '1/2-2019', '126': '1/2-2019'}, 'Pilot': {}}};

var rooms_with_360_images = {'HS': ['100', '108'], 'OI': ['2211', '4414', '5270']};

var rooms_to_scope_dict = {'AP120': [1, 1, 1, 1, 1, 1], 'AP124': [1, 1, 0, 1, 1, 1], 'BA2135': [1, 1, 1, 1, 1, 1], 'BA2159': [1, 1, 0, 1, 1, 1], 'BA2179': [1, 1, 0, 1, 1, 1], 'BAB024': [1, 1, 1, 1, 1, 1], 'BAB025': [1, 1, 1, 1, 1, 1], 'BAB026': [1, 0, 1, 1, 1, 1], 'GB119': [0, 0, 0, 0, 1, 1], 'GB120': [0, 0, 0, 0, 1, 1], 'GB220': [0, 0, 0, 0, 1, 1], 'GB221': [0, 0, 0, 0, 1, 1], 'GB244': [0, 0, 0, 0, 1, 1], 'GB248': [0, 0, 0, 0, 1, 1], 'KP113': [1, 0, 0, 1, 1, 0], 'MS2158': [1, 1, 1, 1, 1, 1], 'OI10204': [1, 1, 1, 1, 1, 1], 'OIC154': [1, 1, 0, 1, 1, 1], 'BF214': [1, 0, 0, 1, 1, 1], 'BF215': [1, 1, 1, 1, 1, 1], 'BF315': [1, 0, 1, 1, 1, 1], 'BF316': [1, 0, 1, 1, 1, 1], 'BF323': [1, 1, 1, 1, 1, 1], 'GB303': [1, 1, 1, 1, 1, 1], 'GB304': [1, 1, 1, 1, 1, 1], 'WB119': [1, 1, 1, 1, 1, 1], 'WB130': [1, 1, 1, 0, 0, 1], 'WB219': [1, 1, 1, 0, 0, 1], 'AB114': [1, 1, 1, 1, 1, 1], 'BA2139': [1, 1, 1, 1, 1, 1], 'BA2145': [1, 1, 1, 1, 1, 1], 'BA2155': [1, 1, 1, 1, 1, 1], 'BA2165': [1, 1, 1, 1, 1, 1], 'BA2175': [1, 1, 1, 1, 1, 1], 'BA2185': [1, 1, 1, 1, 1, 1], 'BA2195': [1, 1, 1, 1, 1, 1], 'WW119': [1, 1, 1, 0, 0, 1], 'WW120': [1, 1, 1, 0, 0, 1], 'WW121': [1, 1, 1, 0, 0, 1], 'WW126': [1, 1, 1, 0, 0, 1], 'BA1130': [1, 1, 1, 0, 1, 1], 'BA1190': [1, 1, 1, 1, 1, 1], 'BA1200': [1, 1, 1, 0, 1, 1], 'ES4001': [1, 1, 1, 1, 1, 1], 'ESB142': [1, 1, 1, 1, 1, 1], 'LM159': [1, 0, 0, 1, 1, 1], 'MP202': [1, 1, 1, 0, 0, 1], 'MP203': [1, 1, 1, 0, 0, 1], 'MS2290': [1, 0, 1, 1, 1, 1], 'MS2394': [1, 0, 0, 1, 1, 1], 'MS3290': [1, 0, 0, 1, 1, 1], 'OI11200': [1, 0, 1, 1, 1, 1], 'OI8214': [1, 1, 0, 1, 1, 1], 'OI8220': [1, 1, 0, 1, 1, 1], 'OI8280': [1, 1, 1, 1, 1, 1], 'OIG162': [1, 1, 1, 1, 1, 1], 'SF3202': [1, 1, 1, 1, 1, 1], 'SS1070': [1, 1, 1, 0, 0, 1], 'SS1078': [1, 0, 0, 1, 1, 1], 'SS1080': [1, 1, 1, 1, 1, 1], 'SS1083': [1, 1, 1, 1, 1, 1], 'SS1084': [1, 1, 1, 1, 1, 1], 'SS1085': [1, 1, 1, 1, 1, 1], 'SS1086': [1, 1, 1, 1, 1, 1], 'SS1087': [1, 1, 1, 1, 1, 1], 'SS1088': [1, 0, 0, 1, 1, 1], 'SS2101': [1, 1, 0, 1, 1, 1], 'SS2104': [1, 1, 0, 1, 1, 1], 'SS2105': [1, 1, 1, 0, 0, 1], 'SS2106': [1, 1, 1, 0, 0, 1], 'SS2108': [1, 1, 1, 0, 0, 1], 'SS2110': [1, 1, 1, 0, 0, 1], 'SS2112': [1, 0, 0, 1, 1, 1], 'SS2114': [1, 0, 0, 1, 1, 1], 'SS2116': [1, 0, 1, 1, 1, 1], 'SS2119': [1, 0, 1, 1, 1, 1], 'SS2120': [1, 1, 0, 1, 1, 1], 'SS2135': [1, 0, 1, 0, 0, 1], 'WE69': [1, 0, 0, 1, 1, 1], 'WE74': [1, 0, 0, 1, 1, 1], 'WE75': [1, 0, 0, 1, 1, 1], 'WE76': [1, 1, 0, 1, 1, 1], 'WI2006': [1, 0, 0, 1, 1, 1], 'UC163': [1, 1, 1, 1, 1, 1], 'UC175': [1, 0, 1, 1, 1, 1], 'UC177': [1, 1, 1, 1, 1, 1], 'UC44': [1, 1, 0, 1, 1, 1], 'UC51': [1, 1, 0, 1, 1, 1], 'UC52': [1, 1, 1, 0, 0, 1], 'UC53': [1, 1, 0, 1, 1, 1], 'UC55': [1, 1, 0, 1, 1, 1], 'UC57': [1, 1, 0, 1, 1, 1], 'UC63': [1, 1, 0, 1, 1, 1], 'UC65': [1, 1, 0, 1, 1, 1], 'UC67': [1, 1, 0, 1, 1, 1], 'UC69': [1, 1, 0, 1, 1, 1], 'UC85': [1, 1, 1, 1, 1, 1], 'UC87': [1, 1, 1, 1, 1, 1], 'WI523': [1, 1, 0, 0, 0, 1], 'WI524': [1, 1, 0, 0, 0, 1], 'LM123': [1, 0, 0, 1, 1, 1], 'LM155': [1, 1, 1, 0, 0, 1], 'LM157': [1, 1, 1, 0, 0, 1], 'UC244': [1, 1, 1, 1, 1, 1], 'UC248': [1, 1, 1, 1, 1, 1], 'UC255': [1, 1, 1, 1, 1, 1], 'UC256': [1, 1, 1, 1, 1, 1], 'UC257': [1, 1, 1, 1, 1, 1], 'UCB203': [1, 0, 0, 1, 1, 1], 'UCD301': [1, 1, 0, 1, 1, 1], 'UCF204': [1, 1, 0, 1, 1, 1], 'BA1160': [1, 1, 1, 1, 1, 1], 'BA1170': [1, 0, 1, 1, 1, 1], 'BA1180': [1, 1, 1, 1, 1, 1], 'BA1210': [1, 1, 1, 0, 0, 1], 'BA1220': [1, 1, 1, 0, 0, 1], 'BA1230': [1, 1, 1, 1, 1, 1], 'BA1240': [1, 1, 1, 1, 1, 1], 'HS106': [1, 1, 1, 1, 1, 1], 'PB255': [1, 0, 0, 1, 1, 1], 'PBB150': [1, 0, 1, 1, 1, 1], 'PBB250': [1, 0, 1, 1, 1, 1], 'SF1105': [1, 1, 1, 1, 1, 1], 'UC140': [1, 1, 1, 1, 1, 1], 'UC144': [1, 1, 1, 1, 1, 1], 'UC148': [1, 1, 1, 1, 1, 1], 'MS3153': [1, 0, 0, 1, 1, 1], 'MS3154': [1, 0, 0, 1, 1, 1], 'OI2212': [1, 1, 1, 1, 1, 1], 'OI2214': [1, 0, 0, 1, 1, 1], 'OI2279': [1, 0, 1, 1, 1, 1], 'OI2286': [1, 1, 0, 1, 1, 1], 'OI2295': [1, 0, 1, 0, 0, 1], 'OI2296': [1, 0, 0, 1, 1, 1], 'OI3311': [1, 0, 0, 1, 1, 1], 'OI4410': [1, 1, 1, 1, 1, 1], 'OI4426': [1, 0, 0, 1, 1, 1], 'OI5150': [1, 0, 0, 1, 1, 1], 'OI5160': [1, 0, 0, 1, 1, 1], 'OI5170': [1, 0, 0, 1, 1, 1], 'OI5230': [1, 0, 0, 1, 1, 1], 'OI5240': [1, 0, 0, 1, 1, 1], 'OI5250': [1, 0, 0, 1, 1, 1], 'OI8170': [1, 0, 0, 1, 1, 1], 'OI8180': [1, 0, 0, 1, 1, 1], 'OI8200': [1, 0, 0, 1, 1, 1], 'OI8201': [1, 0, 0, 1, 1, 1], 'BL113': [0, 0, 0, 0, 0, 1], 'BL224/225': [0, 0, 0, 0, 0, 1], 'BL305': [0, 0, 0, 0, 0, 1], 'BL306': [0, 0, 0, 0, 0, 1], 'BL312': [0, 0, 0, 0, 0, 1], 'BL327': [0, 0, 0, 0, 0, 1], 'HS610': [1, 0, 0, 1, 1, 1], 'HS614': [0, 0, 0, 0, 0, 1], 'HS618': [0, 0, 0, 0, 0, 1], 'HS696': [0, 0, 0, 0, 0, 1], 'HS705': [0, 0, 0, 0, 0, 1], 'HS715': [0, 0, 0, 0, 0, 1], 'SS2125': [0, 0, 0, 0, 0, 1], 'SK100': [1, 0, 0, 1, 1, 1], 'SK114': [1, 0, 1, 1, 1, 1], 'SK218': [1, 0, 1, 1, 1, 1], 'SK222': [1, 1, 1, 1, 1, 1], 'SK346': [1, 0, 1, 1, 1, 1], 'SK348': [1, 0, 1, 1, 1, 1], 'SK418': [1, 1, 1, 1, 1, 1], 'SK548': [1, 1, 1, 1, 1, 1], 'SK702': [1, 1, 1, 1, 1, 1], 'UC152': [0, 0, 0, 0, 0, 1]};

var fullform = {'AB': 'Astronomy and Astrophysics', 'BA': 'Bahen Centre', 'BF': 'Bancroft Building', 'BL': 'Bissell Building', 'ES': 'Earth Sciences Centre', 'GB': 'Galbraith', 'HS': 'Health Sciences', 'LM': 'Lash Miller Chemical Labs', 'MC': 'Mechanical Engineering', 'MP': 'McLennan Physical Laboratories', 'MS': 'Medical Sciences', 'OI': 'OISE', 'PB': 'Pharmacy', 'SF': 'Sandford Fleming', 'SK': 'Social Work', 'SS': 'Sidney Smith Hall', 'UC': 'University College', 'WB': 'Wallberg', 'WE': 'Wetmore Hall - New College', 'WI': 'Wilson Hall - New College', 'WW': 'Woodsworth College'};
