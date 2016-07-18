from django.db import models

class Student(models.Model):
    ACT = models.IntegerField(default='0')
    GPA = models.DecimalField(default='0000000',max_digits=3, decimal_places=2)
    Index = models.CharField(null=True, default='Test', max_length=50)
    Strategy = models.IntegerField(default='0')
    Fit = models.CharField(null=True, default='Test', max_length=1)
    Reach = models.CharField(null=True, default='Test', max_length=1)
    Safety = models.CharField(null=True, default='Test', max_length=1)
    Secure = models.CharField(null=True, default='Test', max_length=1)
    Race = models.CharField(null=True, default='Test', max_length=1)

    def _str_(self): #don't know if I have to do this for all of the model
        return self.title


class College(models.Model):
    UNITID = models.IntegerField(default='0')
    INSTNM = models.CharField(null=True, default='Test', max_length=100)
    CITY = models.CharField(null=True, default='Test', max_length=50)
    STABBR = models.CharField(null=True, default='Test', max_length=50)
    TYPE = models.CharField(null=True, default='Test', max_length=50)
    DISTFROMCHICAGO = models.CharField(null=True, default='Test', max_length=50) ##Make abstract to different location
    SIMPLEBARRONS = models.CharField(null=True, default='Test', max_length=50)
    NETPRICE0_30 = models.CharField(null=True, default='Test', max_length=50)
    NETPRICE30_48 = models.CharField(null=True, default='Test', max_length=50)
    PERCENT_MALE = models.CharField(null=True, default='Test', max_length=50)
    ADJ6YRGRAD = models.CharField(null=True, default='Test', max_length=50)
    ADJ6YRGRAD_AA_HISP	= models.CharField(null=True, default='Test', max_length=50)
    RETENTIONAAH = models.CharField(null=True, default='Test', max_length=50)
    ADJACT25 = models.CharField(null=True, default='Test', max_length=50)
    WEBSITE	= models.CharField(null=True, default='Test', max_length=50)
    MEAN_UNMET_NEED = models.CharField(null=True, default='Test', max_length=50)
    MIN_UNMET_NEED	= models.CharField(null=True, default='Test', max_length=50)
    MAX_UNMET_NEED = models.CharField(null=True, default='Test', max_length=50)
    LOCALE = models.CharField(null=True, default='Test', max_length=50)
    NUMBER_UNDERGRADS = models.CharField(null=True, default='Test', max_length=50)
    PUB_PRIVATE = models.CharField(null=True, default='Test', max_length=50)
    MONEYFY14_CATEGORY = models.CharField(null=True, default='Test', max_length=50)
    NOBLEALUMNI = models.CharField(null=True, default='Test', max_length=50) #not sure if char or number, blank on spreadsheet
    NETPRICE48_75 = models.CharField(null=True, default='Test', max_length=50)
    PERCENT_PELL = models.CharField(null=True, default='Test', max_length=50)
    MONEYFY13 = models.CharField(null=True, default='Test', max_length=50)
    MONEYFY14 = models.CharField(null=True, default='Test', max_length=50)
    ADJACT50 = models.CharField(null=True, default='Test', max_length=50)
