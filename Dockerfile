FROM node
 
WORKDIR /app
RUN cp . /app
 
CMD ["node", "./bin/start.js"]