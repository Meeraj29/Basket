n=int(input())
k=1
ans=0
c=1000
while c<=n:
    m=c*1000
    num=min(n-c+1,m-c)
    ans+=num*k
    c=m
    k=k+1
print(ans)        

1010000
1019002
