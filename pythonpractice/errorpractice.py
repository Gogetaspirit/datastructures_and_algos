try:
    a = 2
    arr = []
    arr.sor()
except NameError:
    print('this is a specific error')
except Exception as e:
    print(e)
else:
    print('code is working properly')
finally:
    print('this happens regardless')