from django import template

register = template.Library()


@register.filter
def get_value(value, arg):
    return value[arg]


@register.filter
def range_of_numbers(value):
    return range(value)
