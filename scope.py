import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

rooms_to_scope_dict = {}
df = pd.read_excel('scope.xlsx', sheet_name='Sheet1')
columns = list(df.columns)
for i in range(df.shape[0]):
    row = df.loc[i, : ]
    rooms_to_scope_dict[row[0]] = []
    for j in range(1, df.shape[1]):
        if str(row[j]) != 'nan':
            rooms_to_scope_dict[row[0]].append(True)
        else:
            rooms_to_scope_dict[row[0]].append(False)
print(rooms_to_scope_dict)
