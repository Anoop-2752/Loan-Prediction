# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port for web apps (if using Flask or FastAPI)
EXPOSE 5000

# Run the app when the container starts
CMD ["python", "app.py"]
