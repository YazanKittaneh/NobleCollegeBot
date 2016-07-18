from CollegeBot.models import College
from postgres_copy import CopyMapping
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        c = CopyMapping(
            # Give it the model
            College,
            # The path to your CSV
            './CollegeBot/DataSheets/college_list.csv',
            # And a dict mapping the  model fields to CSV headers
            dict(UNITID='UNITID',
            INSTNM='INSTNM',
            CITY='CITY',
            STABBR='STABBR',
            TYPE='Type',
            DISTFROMCHICAGO='DistFromChicago',
            SIMPLEBARRONS='SimpleBarrons',
            NETPRICE0_30='NetPrice0-30',
            NETPRICE30_48='NetPrice30-48',
            PERCENT_MALE= r'%'+' male',
            ADJ6YRGRAD='Adj6yrGrad',
            ADJ6YRGRAD_AA_HISP='Adj6yrGrad_AA_Hisp',
            RETENTIONAAH='RetentionAAH',
            ADJACT25='AdjACT25',
            WEBSITE='Website',
            MEAN_UNMET_NEED='Mean Unmet Need',
            MIN_UNMET_NEED='Min Unmet Need',
            MAX_UNMET_NEED='Max Unmet Need',
            LOCALE='Locale',
            NUMBER_UNDERGRADS='# of undergrads',
            PUB_PRIVATE='Pub/Private',
            NOBLEALUMNI='NobleAlumni',
            NETPRICE48_75='NetPrice48-75',
            PERCENT_PELL= r'%'+'Pell',
            MONEYFY13 = 'MoneyFY13',
            MONEYFY14 = 'MoneyFY14',
            MONEYFY14_CATEGORY = 'MoneyFY14 Category',
            ADJACT50='AdjACT50'
            )
        )
        # Then save it.
        c.save()
