def find_peak(list_of_integers):
    """
    Finds a peak in a list of unsorted integers.

    Args:
        list_of_integers (list): The list of unsorted integers.

    Returns:
        int: The peak element in the list.

    Complexity:
        O(log(n))
    """
    if not list_of_integers:
        return None
    
    low = 0
    high = len(list_of_integers) - 1
    
    while low < high:
        mid = (low + high) // 2
        if list_of_integers[mid] > list_of_integers[mid + 1]:
            high = mid
        else:
            low = mid + 1
    
    return list_of_integers[low]
