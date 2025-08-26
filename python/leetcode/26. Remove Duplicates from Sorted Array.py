def removeDuplicates(self, nums):
    c = 0

    for i in range(1, len(nums)):
        if nums[c] != nums[i]:
            nums[c + 1] = nums[i]
            c += 1

    return c + 1
