import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

df = pd.read_excel('stats.xlsx', sheet_name='Sheet1')
columns = list(df.columns)[1:]
totals = []

last_index = len(df.index)-1
for column in columns:
    totals.append(int(df[column][last_index]))

with open('./TIL Website/index_test.html', 'r+') as f:
    content = f.read()
    return_string = ''
    return_string += content[:content.find('data-number') + 13]

    index = 0
    for i in range(3):
        return_string = return_string + str(totals[i]) + "'>" + str(totals[i])
        
        index = content.find('data-number', index + 1)
        split_string = content[index:]
        end = split_string[13:].find('data-number')
        if (end != -1):
            append_text = split_string[split_string.find('<'):end + 13]
            return_string += append_text
        else:
            return_string += split_string[split_string.find('<'):]
    print(return_string)
            
        
    
