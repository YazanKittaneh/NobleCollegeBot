from CollegeBot.models import Custom_Coefficient
from postgres_copy import CopyMapping
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        c = CopyMapping(
            # Give it the model
            Custom_Coefficient,
            # The path to your CSV
            './CollegeBot/DataSheets/custom_coefficients.csv',
            # And a dict mapping the  model fields to CSV headers
            dict(
                SCHOOLCODE = 'SchoolCode',
                GPACOEF	= 'GPAcoef',
                ACTCOEF = 'ACTcoef',
                INTERCEPT = 'Intercept',
            )
        )
        # Then save it.
        c.save()
