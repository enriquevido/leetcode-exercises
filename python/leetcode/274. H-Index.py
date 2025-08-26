def hIndex(self, citations):
        res = 0
        citations.sort()
        citations.reverse()

        for i in range(len(citations)):
            if i + 1 <= citations[i]:
                res = i + 1
        

        return res