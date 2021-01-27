//We have a list of points on the plane.Find the K closest points to the origin(0, 0).
//(Here, the distance between two points on a plane is the Euclidean distance.)
//You may return the answer in any order.The answer is guaranteed to be unique(except for the order that it is in.)


var kClosest = function (points, K) {
    let closetPoints = []
    //sort points by closet to origin using a2 + b2 = c2
    let result = points.sort((a, b) => {
        let aSquared = a[0] * a[0]
        let bSquared = a[1] * a[1]
        let distanceOfA = Math.sqrt(aSquared + bSquared)
        let baSquared = b[0] * b[0]
        let bbSquared = b[1] * b[1]
        let distanceOfB = Math.sqrt(baSquared + bbSquared)
        return distanceOfA - distanceOfB
    })
    let i = 0
    //push the closetpoints into the array until length reaches k 
    while (closetPoints.length < K) {
        closetPoints.push(result[i])
        i++;
    }
    return closetPoints;
};












