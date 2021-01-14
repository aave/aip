for i in *.md 
do 
    mv "$i" "$(echo ${i%.md} | tr [:lower:] [:upper:]).md"; 
done