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
		
		
#recursion

def sunsetViews(buildings, direction):
    # Write your code here.
	highest = -1
	seeSunset = []
    if direction == "EAST":
		idx = len(buildings) - 1
		while idx >= 0:
			currentBuilding = buildings[idx]
			if currentBuilding > highest:
				highest = currentBuilding
				seeSunset.append(idx)
			idx -= 1
		seeSunset.reverse()
	else:
		idx = 0
		while idx < len(buildings):
			currentBuilding = buildings[idx]
			if currentBuilding > highest:
				highest = currentBuilding
				seeSunset.append(idx)
			idx += 1
	return seeSunset


	def balancedBrackets(string):
    # Write your code here.
    opening = {"(": True, "{": True, "[": True}
	closing = {")": True, "}": False, "]": False}
	matching = {"(": ")", "{": "}", "[": "]"}
	stack = []
	for idx in range(len(string)):
		char = string[idx]
		if opening.get(char) is None and closing.get(char) is None:
			continue
		elif len(stack) is 0:
			stack.append(char)
		elif opening.get(stack[-1]) is not None and char == matching[stack[-1]]:
			stack.pop()
		else:
			stack.append(char)
	return len(stack) == 0
	
def minimumCharactersForWords(words):
    # Write your code here.
    result = {}
	resultArray = []
	for word in words:
		mapLetterToHash(word, result)
	for key, value in result.items():
		for count in range(value):
			resultArray.append(key)
	return resultArray
		
def mapLetterToHash(word, result):
	letterFreq = {}
	for letter in word:
		if letter not in letterFreq:
			letterFreq[letter] = 1
		else:
			letterFreq[letter] += 1
	for key, value in letterFreq.items():
		if key not in result:
			result[key] = value
		else:
			result[key] = max(result[key], value)


def nextGreaterElement(array):
    # Write your code here.
    result = [-1] * len(array)
	stack = []
	#[4,-1,3,3,-1,-1]
	#[1]
	#[2,4,-1,-6,3,1]
	
	for idx in range(2 * len(array)):
		circularIdx = idx % len(array)
		
		while len(stack) > 0 and array[stack[len(stack) - 1]] < array[circularIdx]:
			top = stack.pop()
			result[top] = array[circularIdx]
			
		stack.append(circularIdx)
		
	return result









		

