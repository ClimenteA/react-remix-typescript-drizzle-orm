container_id=$(docker ps | awk '/multisite-remix-app/ {print $1}')

if [[ -z "$container_id" ]]
then
    echo "No container found with image multisite-remix-app"
else
    rm -rf backup
    mkdir backup
    docker cp ${container_id}:/home/sites/data ./backup
    echo "Data copied successfully from container ${container_id}"
fi