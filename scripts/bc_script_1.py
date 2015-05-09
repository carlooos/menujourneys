import pandas as pd

path = "../data/mega_master_20150507a.csv"

master = pd.read_csv(path, index_col='unique_id')


fp = pd.DataFrame()

fp["fingerprint"] = master["fingerprint"].unique()

print fp

# fp["fingerprint"] = master.groupby(["fingerprint"])

# print fp

# master["fp_id"] = master.groupby(master["fingerprint"])

# print master

# print grouped.count().sort()