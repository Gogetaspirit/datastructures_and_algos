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

def phoneNumberMnemonics(phoneNumber, idx = 0, emptyStr = '', result = []):
    # Write your code here.
	current = ['0'] * len(phoneNumber)
	found = []
	
	recursiveHelper(0, phoneNumber, current, found)
	return found

def recursiveHelper(idx, phoneNumber, current, found):
	if idx == len(phoneNumber):
		mnemonic = ''.join(current)
		found.append(mnemonic)
	else:
		digit = phoneNumber[idx]
		letters = MAP[digit]
		for letter in letters:
			current[idx] = letter
			recursiveHelper(idx + 1, phoneNumber, current, found)
		
	
MAP = {
		"0": ["0"],
		"1": ["1"],
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"]
}
	
