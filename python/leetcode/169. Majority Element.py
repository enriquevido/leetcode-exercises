def majorityElement(self, nums):
        elementMap = {}
        higherElement = nums[0]
        highest = 1
        for x in nums:
            elementMap[x] = elementMap.get(x, 0) + 1
            if elementMap[x] > highest:
                highest = elementMap[x]
                higherElement = x

        return higherElement