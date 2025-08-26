def _reverse(self, nums, l, r):
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l, r = l + 1, r - 1

def rotate(self, nums, k):
    k = k % len(nums)

    self._reverse(nums, 0, len(nums) - 1)
    self._reverse(nums, 0, k - 1)
    self._reverse(nums, k, len(nums) - 1)