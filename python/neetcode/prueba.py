class Solution(object):
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            count = 1
            while count < len(nums):
                if i + count == target:
                    return i
                count += 1