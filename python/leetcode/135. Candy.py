def candy(self, ratings):
    n = len(ratings)
    res = n
    i = 1

    while i < n:
        if ratings[i] == ratings[i - 1]:
            i += 1
            continue
        
        current_peak = 0
        while i < n and ratings[i] > ratings[i - 1]:
            current_peak += 1
            res += current_peak
            i+= 1
        
        if i == n:
            return res

        current_valley = 0
        while i < n and ratings[i] < ratings[i - 1]:
            current_valley += 1
            res += current_valley
            i += 1

        res -= min(current_peak, current_valley)
    
    return res
