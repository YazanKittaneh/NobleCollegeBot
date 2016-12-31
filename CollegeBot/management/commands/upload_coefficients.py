from CollegeBot.models import Coefficient
from postgres_copy import CopyMapping
from django.core.management.base import BaseCommand

#Maps CSV data onto Coefficient objects and stores them on PostGres
class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        c = CopyMapping(
            # Give it the model
            Coefficient,
            # The path to your CSV
            './CollegeBot/DataSheets/coefficients.csv',
            # And a dict mapping the  moidel fields to CSV headers
            dict(
                COMPETATIVENESS = 'Competitiveness',
                MATCHCODE = 'MatchCode',
                GPACOEF	= 'GPAcoef',
                ACTCOEF = 'ACT-coef',
                INTERCEPT = 'Intercept'
            )
        )
        # Then save it.
        c.save()
