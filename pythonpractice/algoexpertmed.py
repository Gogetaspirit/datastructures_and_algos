def powerset(array, left = None):
    # Write your code here.
    if left is None:
		left = len(array) - 1
	if left < 0:
		return [[]]
	ele = array[left]
	subsets = powerset(array, left - 1)
	for idx in range(len(subsets)):
		currentSubset = subsets[idx]
		subsets.append(currentSubset + [ele])
	return subsets