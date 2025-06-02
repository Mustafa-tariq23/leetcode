#include <iostream>
#include <vector>
using namespace std;

int candies(int rating[], int length)
{
    vector<int> candies(length, 1);

    for (int i = 1; i < length; i++) {
        if (rating[i] > rating[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (int i = length - 2; i >= 0; i--) {
        if (rating[i] > rating[i + 1]) {
            candies[i] = max(candies[i], candies[i + 1] + 1);
        }
    }

    int totalSum = 0;
    for (int i = 0; i < length; i++) {
        totalSum += candies[i];
    }

    return totalSum;
}

int main()
{
    int ratings[] = {1, 0, 2, 3, 1, 4, 2};
    int length = sizeof(ratings) / sizeof(ratings[0]);

    int result = candies(ratings, length);

    cout << "Total candies: " << result << endl;

    return 0;
}
