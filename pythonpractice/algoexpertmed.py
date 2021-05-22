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

def minimumPassesOfMatrix(matrix):
	
# Write your code here.
	passes = convertNegatives(matrix)
	if not containsNegative(matrix):
		return passes - 1
	else:
		return -1

def convertNegatives(matrix):
	nextPassQueue = getAllPositivePositions(matrix)
	
	passes = 0
	
	while len(nextPassQueue) > 0:
		currentPassQueue = nextPassQueue
		nextPassQueue = []
		
		while len(currentPassQueue) > 0:
			currentRow, currentCol = currentPassQueue.pop(0)
			adjacentPositions = getAdjacentPositions(currentRow, currentCol, matrix)
			for position in adjacentPositions:
				row, col = position
				
				value = matrix[row][col]
				if value < 0:
					matrix[row][col] *= -1
					nextPassQueue.append([row, col])
		passes += 1
	return passes

def getAllPositivePositions(matrix):
	positivePositions = []
	
	for row in range(len(matrix)):
		for col in range(len(matrix[row])):
			value = matrix[row][col]
			if value > 0:
				positivePositions.append([row, col])
	return positivePositions

def getAdjacentPositions(row, col, matrix):
	adjacentPositions = []
	if row > 0:
		adjacentPositions.append([row-1, col])
	if row < len(matrix) - 1:
		adjacentPositions.append([row+1, col])
	if col > 0:
		adjacentPositions.append([row, col-1])
	if col < len(matrix[0]) - 1:
		adjacentPositions.append([row, col+1])
	return adjacentPositions

def containsNegative(matrix):
	for row in matrix:
		for value in row:
			if value < 0:
				return True
	return False
		
		

